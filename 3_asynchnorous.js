//3. Write a program to demonstrate asynchronous programming in Node JS. 
const fs = require("fs")

console.log("Name: Sumit Kumar")
console.log("Roll No: 191")

fs.writeFile("file1.txt","This is the first file",(err)=>{
    if(err) throw err
    console.log("File 1 created")
})

fs.writeFile("file2.txt","This is the second file",(err)=>{
    if(err) throw err
    console.log("File 2 created")
})

fs.readFile("file1.txt","utf8",(err,data)=>{
    if(err) throw err
    console.log("Content of File 1:",data)  
})

console.log("Program finished")
