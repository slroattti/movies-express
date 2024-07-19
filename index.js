const express = require('express');
const path = require('path');
const app = express();
const host = "localhost";
const port = 3000;

const Movies = require("./routes/movies.route")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("Content-Type", "text/html");

app.use("/api/movies", Movies);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})


app.listen(port, () => {
    console.log(`Server running on http://${host}:${port}`);
})