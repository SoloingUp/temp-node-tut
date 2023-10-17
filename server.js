const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Hello and welcome");
  }
  if (req.url === "/about") {
    res.end("This is about");
  }
  res.end("<h1>OOps</h1>");
});

server.listen(5000);
