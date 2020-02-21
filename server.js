const express = require("express");

const app = express();
const PORT = 8080;

app.get("/", function(req, res) {
    res.send("hello");
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});