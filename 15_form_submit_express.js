//15.Write a program to create a registration form and display the submitted information on the page using express.
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send(`
    <h2>Registration Form</h2>
    <form method="POST" action="/">
      Name: <input type="text" name="name" required><br><br>
      Roll No: <input type="text" name="roll" required><br><br>
      Email: <input type="email" name="email" required><br><br>
      <input type="submit" value="Register">
    </form>
  `);
});


app.post("/", (req, res) => {
  const { name, roll, email } = req.body;

  res.send(`
    <h2>Submitted Information</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Roll No:</strong> ${roll}</p>
    <p><strong>Email:</strong> ${email}</p>
    <a href="/">Register Another</a>
  `);
});


app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});