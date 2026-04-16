const http = require("http");
const userForm = require("./userForm");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url === "/") {
      userForm(req, res);
    } else if (req.url === "/submit") {
      res.write("<h1>Form Submitted</h1>");
      res.end();
    }
  })
  .listen(3000, () => {
    console.log("Server is running on port 3000");
  });
