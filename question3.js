const http = require("http");

const server = http.createServer((req, res) => {
   res.writeHead(200, { "Content-Type": "application/json" });
   res.write(JSON.stringify({ firstname: "John", lastname: "Doe", birthdate: "20/07/1999", color: "green" }));
   res.end();
});

server.listen(3000, () => console.log("Le serveur tourne sur le http://localhost:3000"));
