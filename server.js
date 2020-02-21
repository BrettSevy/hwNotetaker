const express = require("express");
const path = require("path");

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(express.static("public"));


app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});


app.get("/notes", function (req, res) {
    res.sendFile(path.join(__filename, "../public/notes.html"));
});

app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__filename, "../db/db.json"));
  });


// listener
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});