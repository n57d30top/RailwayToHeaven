const http = require('http');

const PORT = process.env.PORT || 3000;

// Motivierende Impulse inspiriert von Flow, Klarheit, Bergkristall und Ganesha
const flowImpulses = [
  {
    title: "💎 Bergkristall-Prinzip",
    text: "Wie der Bergkristall Licht in Klarheit verwandelt, transformiere Komplexität in einfachen, reinen Code. Jede Zeile sollte durchsichtig sein wie Kristall.",
    author: "Die Energie der Klarheit"
  },
  {
    title: "🐘 Ganesha's Weisheit",
    text: "Ganesha beseitigt Hindernisse, indem er sie nicht bekämpft, sondern versteht. Debug nicht mit Gewalt – verstehe den Flow deines Codes.",
    author: "Der Hindernisbeseitiger"
  },
  {
    title: "🌊 Im Flow bleiben",
    text: "Flow entsteht nicht durch Perfektion, sondern durch vollständige Präsenz. Schreibe Code, als wäre es Meditation – ein Gedanke, eine Zeile, ein Atemzug.",
    author: "Der Zustand des Werdens"
  },
  {
    title: "✨ Kristallklare Intention",
    text: "Bevor du tippst, frage: 'Was ist die klarste Form dieser Lösung?' Der Bergkristall zeigt: Wahre Schönheit liegt in der Einfachheit.",
    author: "Die Essenz des Codes"
  },
  {
    title: "🕉️ Neue Anfänge",
    text: "Jeder Commit ist ein neuer Anfang. Ganesha lehrt: Ehre das Alte, aber fürchte dich nicht, Hindernisse zu entfernen und neu zu beginnen.",
    author: "Der Mut zur Transformation"
  },
  {
    title: "💫 Flow durch Fokus",
    text: "Wie Licht durch einen Kristall gebündelt wird, bündele deine Aufmerksamkeit. Ein Problem, eine Lösung, ein Moment vollständiger Klarheit.",
    author: "Die Kraft der Konzentration"
  },
  {
    title: "🌟 Licht ins Dunkel",
    text: "Legacy Code ist kein Hindernis – es ist dein Lehrer. Bringe Licht der Klarheit hinein, wie ein Bergkristall Dunkelheit durchdringt.",
    author: "Die Weisheit des Verstehens"
  },
  {
    title: "🧘 Code als Praxis",
    text: "Ganesha sitzt in Ruhe, doch seine Wirkung ist gewaltig. Programmiere aus der Stille heraus. Die besten Lösungen entstehen im ruhigen Geist.",
    author: "Die Stille vor dem Code"
  },
  {
    title: "💠 Transparenz schafft Vertrauen",
    text: "Code wie Kristall – durchsichtig, klar, ehrlich. Andere sollen durch deinen Code sehen können wie durch reines Glas.",
    author: "Das Prinzip der Offenheit"
  },
  {
    title: "🌀 Der ewige Flow",
    text: "Ganesha's Tanz ist endlos, wie der Flow-Zustand zeitlos ist. Verliere dich nicht in der Zeit – verliere dich im Code.",
    author: "Die Zeitlosigkeit des Moments"
  }
];

const server = http.createServer((req, res) => {
  // Route handling
  if (req.url === '/impact') {
    // Zufälligen Impuls auswählen
    const randomImpulse = flowImpulses[Math.floor(Math.random() * flowImpulses.length)];

    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Impact - RailwayToHeaven</title>
        <style>
          body {
            font-family: 'Courier New', monospace;
            background: linear-gradient(135deg, #2d3561 0%, #c05c7e 100%);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            color: white;
            padding: 20px;
          }
          .container {
            max-width: 700px;
            padding: 50px;
            background: rgba(0,0,0,0.4);
            border-radius: 20px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.4);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.1);
          }
          h1 {
            font-size: 2.5em;
            margin: 0 0 30px 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
          }
          .impulse {
            font-size: 1.3em;
            line-height: 1.8;
            margin: 30px 0;
            padding: 20px;
            background: rgba(255,255,255,0.05);
            border-left: 4px solid #c05c7e;
            border-radius: 5px;
          }
          .author {
            font-style: italic;
            color: #c05c7e;
            margin-top: 20px;
            text-align: right;
          }
          .actions {
            margin-top: 40px;
            display: flex;
            gap: 20px;
            justify-content: center;
          }
          a {
            color: white;
            text-decoration: none;
            padding: 12px 24px;
            background: rgba(192, 92, 126, 0.6);
            border-radius: 8px;
            transition: all 0.3s;
            border: 1px solid rgba(255,255,255,0.2);
          }
          a:hover {
            background: rgba(192, 92, 126, 0.8);
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(192, 92, 126, 0.4);
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${randomImpulse.title}</h1>
          <div class="impulse">
            ${randomImpulse.text}
            <div class="author">– ${randomImpulse.author}</div>
          </div>
          <div class="actions">
            <a href="/impact">Neuer Impuls</a>
            <a href="/">Home</a>
          </div>
        </div>
      </body>
      </html>
    `);
  } else {
    // Homepage
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
          a {
            display: inline-block;
            margin-top: 30px;
            color: white;
            text-decoration: none;
            padding: 15px 30px;
            background: rgba(255,255,255,0.2);
            border-radius: 10px;
            transition: all 0.3s;
            border: 2px solid rgba(255,255,255,0.3);
          }
          a:hover {
            background: rgba(255,255,255,0.3);
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
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
          <a href="/impact">Empfange einen Impuls 💫</a>
        </div>
      </body>
      </html>
    `);
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`Flow Status: Active. Impact: Rising.`);
});
