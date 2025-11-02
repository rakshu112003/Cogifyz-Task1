
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

// Home route
app.get("/", (req, res) => {
  res.send(`
    <form action="/submit" method="post">
      <input type="text" name="username" placeholder="Name" required><br>
      <input type="email" name="email" placeholder="Email" required><br>
      <button type="submit">Submit</button>
    </form>
  `);
});

// Handle form submission
app.post("/submit", (req, res) => {
  const { username, email } = req.body;
  res.send(`
    <h1>Form Submitted</h1>
    <p>Name: ${username}</p>
    <p>Email: ${email}</p>
  `);
});

// Start server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

