const http = require("http");
const fs = require("fs");
const queryString = require("querystring");

http
  .createServer((req, res) => {
    fs.readFile("index.html", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error loading page");
      } else if (req.url === "/") {
        res.write(data);
        res.end();
      } else if (req.url === "/submit") {
        const dataBody = [];
        req.on("data", (chunk) => {
          dataBody.push(chunk);
        });
        req.on("end", () => {
          const rawData = Buffer.concat(dataBody).toString();
          const readableData = queryString.parse(rawData);
          fs.writeFile(
            "text/" + readableData.message + ".txt",
            readableData.message,
            "utf-8",
            (err) => {
              if (err) {
                console.error("Error writing file:", err);
              } else {
                console.log("File written successfully");
              }
            },
          );
          res.write("<h1>Form Submitted</h1>");
          res.end();
        });
      }
    });
  })
  .listen(3000, () => {
    console.log("Server is running on port 3000");
  });
