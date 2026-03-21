//14.Create a website that displays at least 3 html pages. Also create a navigation menu and perform a routing process using express. 

const express = require("express")
const path = require("path")

const app = express()

app.get("/",(req,res)=>{
res.sendFile(path.join(__dirname,"index.html"))
})

app.get("/about",(req,res)=>{
res.sendFile(path.join(__dirname,"about.html"))
})

app.get("/contact",(req,res)=>{
res.sendFile(path.join(__dirname,"contact.html"))
})

app.listen(3000)
console.log("Server running at http://localhost:3000")
