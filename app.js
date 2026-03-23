const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World, I have done this");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});