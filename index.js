const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>RailwayToHeaven</title>
      <style>
        body {
          font-family: 'Courier New', monospace;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          color: white;
        }
        .container {
          text-align: center;
          padding: 40px;
          background: rgba(0,0,0,0.3);
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        h1 {
          font-size: 3em;
          margin: 0;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        .status {
          font-size: 1.5em;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 RailwayToHeaven</h1>
        <div class="status">
          <p><strong>Flow Status:</strong> Active</p>
          <p><strong>Impact:</strong> Rising</p>
        </div>
      </div>
    </body>
    </html>
  `);
});

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`Flow Status: Active. Impact: Rising.`);
});
