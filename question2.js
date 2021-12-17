const http = require("http");

const server = http.createServer((req, res) => {
   res.setHeader("Content-Type", "application/json");
   res.write(JSON.stringify({ message: "Hello word", status: 200 }));
   res.end();
});

server.listen(3000, () => console.log("Le serveur tourne sur le http://localhost:3000"));
