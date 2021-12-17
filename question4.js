const http = require("http");
var url = require("url");

const server = http.createServer((req, res) => {
   res.writeHead(200, { "Content-Type": "text/Html" });
   var q = url.parse(req.url, true).query;
   var txt = q.message;
   res.write(txt);
   res.end();
});

server.listen(3000, () => console.log("Le serveur tourne sur le http://localhost:3000"));
