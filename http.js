const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Sajjanpur");
    return
  }
  if (req.url === "/about-us") {
    res.end("This is about us page");
    return
  }
  res.end(`<h1>Oop wrong window!!!</h1>
     <a href='/'>back home</a>`)
});

server.listen(5000);
