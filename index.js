const express = require("express");
const app = express();
const port = 5000;
app.use(express.urlencoded({ extended: false }));

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to a basic express App again");
});

app.post("/user", (req, res) => {
    const { name, location } = req.body;

    res.send({ status: "User created", name, location });
});

// Listen on port 5000
app.listen(port, () => {
    console.log(`Server is boomings on port 5000  Visit http://localhost:${port}`);
});