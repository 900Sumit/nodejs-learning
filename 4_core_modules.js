//4. Write a program to demonstrate any one core module of Node JS (fs, http, path, os). 
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        fs.readFile("index.html", (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end("Error loading home page");
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } 
    else if (req.url === "/contact") {
        fs.readFile("contact.html", (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end("Error loading contact page");
            }
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } 
    else {
        res.writeHead(404);
        res.end("Page not found");
    }
});

server.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});