//11. Write a program to create a form and display the submitted information on the same page. 
var http = require('http');
var fs = require('fs');
var querystring = require('querystring');
const { config } = require('process');

var server = http.createServer(function(req,res){  
    if(req.method === 'GET'){
        fs.readFile('form.html', 'utf-8', function(err,data){
            if(err){
                res.writeHead(500,{'Content-Type':'text/html'});
                res.write('<html><body><p>Error occurred while reading form.html</p></body></html>');
                res.end();
            } else {
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end(data);
            }
        });
    }
    else if(req.method === 'POST'){
        var body = '';
        req.on('data', function(chunk){
            body += chunk;
            console.log('Received chunk: ', body);
            var data = querystring.parse(body);
            body = 'Name: ' + data.dname + ', Email: ' + data.demail + ', Address: ' + data.daddress;
            console.log('Parsed form data: ', body);
        });
        req.on('end', function(){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(body);
        });
    }
});
server.listen(3000,function(){
    console.log('Server is running on port 3000');
});
git config --global user.name "900sumit"
git config --global user.email "sumit90047kumar@gmail.com"