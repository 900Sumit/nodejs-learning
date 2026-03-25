//9. Write a program to create 3 different HTTP requests and display the content accordingly.
//understand routing in http module
var http = require('http');
var server = http.createServer(function(req,res){
    if(req.url == '/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><p>Home Page Name: Sumit Kumar Roll No: 191</p></body></html>');
        res.end();
    }
    else if(req.url == '/student'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><p>This is student Name: Sumit Kumar Roll No: 191</p></body></html>');
        res.end();
    }
    else if(req.url == '/admin'){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('<html><body><p>This is admin Name: Sumit Kumar Roll No: 191</p></body></html>');
        res.end();
    }
    else{
        res.writeHead(404,{'Content-Type':'text/html'});
        res.write('<html><body><p>Page Not Found Name: Sumit Kumar Roll No: 191</p></body></html>');
        res.end();
    }   
});
server.listen(3000,function(){
    console.log('Server is running on port 3000');
});     
