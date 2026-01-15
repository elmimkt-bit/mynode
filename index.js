// index.js
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Express Hello</title>
      <style>
        :root { --primary: #6366f1; --dark: #1e293b; }
        body {
          margin: 0;
          font-family: system-ui, sans-serif;
          background: var(--dark);
          color: white;
          min-height: 100vh;
          display: grid;
          place-items: center;
        }
        .card {
          background: rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          padding: 4rem 5rem;
          border-radius: 1.2rem;
          border: 1px solid rgba(255,255,255,0.1);
          text-align: center;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.6);
        }
        h1 { margin: 0; font-size: 4.8rem; }
        .time { font-size: 1.7rem; opacity: 0.9; margin-top: 1rem; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Express + Node.js</h1>
        <div class="time">${new Date().toLocaleString('en-SG')}</div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`→ http://localhost:${PORT}`);
});
