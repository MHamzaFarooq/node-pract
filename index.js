const http = require("http");

http
  .createServer((req, res) => {
    res.write("<h1>Welcome to My Node.js Server</h1>");
    res.end("Hello, World!");
  })
  .listen(3000, () => {
    console.log("Server is running on port 3000");
  });
