const http = require("http");
var url = require("url");

const server = http.createServer((req, res) => {
   res.writeHead(200, { "Content-Type": "text/Html" });
   if (req.url == "/hello") {
      res.writeHead(200, { "Content-Type": "application/json" });
      content = "Hello, world!";
   } else {
      res.writeHead(404, { "Content-Type": "application/json" });
      content = "Not found!";
   }
   res.write(content);
   res.end();
});

server.listen(3000, () => console.log("Le serveur tourne sur le http://localhost:3000"));
