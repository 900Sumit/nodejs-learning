//13.Write a program to demonstrate a third party module (express).
const http = require("http")
const querystring = require("querystring")

const server = http.createServer((req,res)=>{

if(req.method==="GET"){
res.writeHead(200,{"Content-Type":"text/html"})
res.write(`<h2>Registration Form</h2>
<form method="POST">
Name: <input type="text" name="name"><br><br>
Roll No: <input type="text" name="roll"><br><br>
Email: <input type="email" name="email"><br><br>
<input type="submit" value="Register">
</form>`)
res.end()
}

else if(req.method==="POST"){
let body=""
req.on("data",chunk=>{
body+=chunk
})

req.on("end",()=>{
const data=querystring.parse(body)
res.writeHead(200,{"Content-Type":"text/html"})
res.write(`<h2>Registration Successful</h2>
<p>Name: ${data.name}</p>
<p>Roll No: ${data.roll}</p>
<p>Email: ${data.email}</p>`)
res.end()
})
}

})

server.listen(3000)
console.log("Server running at http://localhost:3000")
