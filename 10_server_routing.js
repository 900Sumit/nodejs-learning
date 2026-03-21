//10.Create a website that displays at least 3 html pages. Also create a navigation menu and perform a routing process. 
const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res)=>{

    if(req.url==="/"){
        fs.readFile("index.html",(err,data)=>{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(data)
            res.end()
        })
    }

    else if(req.url==="/about"){
        fs.readFile("about.html",(err,data)=>{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(data)
            res.end()
        })
    }

    else if(req.url==="/contact"){
        fs.readFile("contact.html",(err,data)=>{
            res.writeHead(200,{"Content-Type":"text/html"})
            res.write(data)
            res.end()
        })
    }

    else{
        res.writeHead(404,{"Content-Type":"text/html"})
        res.write("<h1>Page Not Found</h1>")
        res.end()
    }

})

server.listen(3000)
console.log("Server running at http://localhost:3000")
