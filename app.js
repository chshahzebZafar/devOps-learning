const http = require("http");

const server = http.createServer((req, res) => {
  res.end("CI is added to the projectv - v2");
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});