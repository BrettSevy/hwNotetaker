
const path = require("path");

module.exports = function (app) {

//   // html for home page
//   // app.get("/", function (req, res) {
//   //   res.sendFile(path.join(__dirname, "index.html"));
//   // });

  // html for note taking page
  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });


  

};

