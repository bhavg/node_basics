// function sayHello(name) {
//   console.log("Hello " + name);
// }

// sayHello("Bhavani");

// // console.log(window);

var http = require("http");
var date = require("./myfirstmodule");
var url = require("url");
var fs = require("fs");

http
  .createServer(function (req, res) {
    fs.readFile("demofile1.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write("The Date and time \n currently: " + date.myDateTime());
      res.write(req.url);
      res.write(data);
      var que = url.parse(req.url, true);
      var adr = "http://localhost:8080/default.htm?year=2017&month=february";
      var q = url.parse(adr, true);
      console.log(q.host); //returns 'localhost:8080'
      console.log(q.pathname); //returns '/default.htm'
      console.log(q.search); //returns '?year=2017&month=february'
      var txt = que.query.year + " " + que.query.month;
      res.write(txt);
      return res.end("Hello World!");
    });
  })
  .listen(8080);

fs.appendFile("mynewfile1.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

fs.open("mynewfile2.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("Saved!");
});

fs.writeFile("mynewfile3.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
});
fs.writeFile("mynewfile3.txt", "Hello content! 1234", function (err) {
  if (err) throw err;
  console.log("Saved!");
});

// fs.unlink("mynewfile2.txt", function (err) {
//   if (err) throw err;
//   console.log("File deleted!");
// });
