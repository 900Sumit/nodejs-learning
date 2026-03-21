//12.Write a program to create a registration form and display the submitted information on the next page.
const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

const server = http.createServer((req, res) => {

    // Load Form Page
    if (req.method === "GET" && req.url === "/") {
        fs.readFile("form1.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    }

    // Handle Form Submission & Show on Next Page
    else if (req.method === "POST" && req.url === "/register") {

        let body = "";

        req.on("data", chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const formData = querystring.parse(body);

            res.writeHead(200, { "Content-Type": "text/html" });

            res.write(`
                <h1>Registration Successful</h1>
                <h3>Submitted Details:</h3>
                <p><b>Name:</b> ${formData.dname}</p>
                <p><b>Email:</b> ${formData.demail}</p>
                <p><b>Address:</b> ${formData.daddress}</p>
                <br><a href="/">Go Back</a>
            `);

            res.end();
        });
    }

    // 404 Page
    else {
        res.writeHead(404);
        res.end("Page not found");
    }
});

server.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});