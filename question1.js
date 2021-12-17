const http = require("http");

const server = http.createServer((req, res) => {
   res.writeHead(400);
   res.end();
});

server.listen(3000, () => console.log("Le serveur tourne sur le http://localhost:3000"));
