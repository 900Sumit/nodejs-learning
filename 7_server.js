//7. Write a program to create a http server and display messages. 
const http = require("http")

console.log("Name: Sumit Kumar")
console.log("Roll No: 191")

const server = http.createServer((req,res)=>{
    res.write("Welcome to Node JS Server\n")
    res.write("This message is displayed from HTTP Server\n")
    res.end("Server is running successfully")
})

server.listen(3000)
console.log("Server running at http://localhost:3000")

