const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>DevOps Server</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          color: white;
        }
        .container {
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.3);
        }
        h1 {
          margin-bottom: 10px;
          font-size: 32px;
        }
        p {
          font-size: 18px;
          opacity: 0.9;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 Happy DevOps Learning</h1>
        <p>by Shahzeb Zafar</p>
      </div>
    </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});