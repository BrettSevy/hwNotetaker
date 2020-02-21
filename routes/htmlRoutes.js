
const path = require("path");

module.exports = function (app) {

  // html for home page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

  // html for note taking page
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__filename, "../public/notes.html"));
  });

  // html for default home page
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // information page
  app.get("/api/notes", function (req, res) {
    return res.sendFile(path.json(__dirname, "../db/db.json"));
  });

};

