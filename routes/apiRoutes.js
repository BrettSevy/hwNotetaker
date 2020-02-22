const fs = require("fs")
// const util = require("util")
// const writefileasync = util.promisify(fs.writefile)

// data array
// let noteData = [];
let storedNotes = require("../db/db.json")

module.exports = function(app) {

// get
app.get("/api/notes", function(req, res) {
  res.json(storedNotes);
  console.log(storedNotes)
 
  });



// post
app.post("/api/notes", function(req, res) {
    var newNote = (req.body)
    console.log(newNote)
  
    storedNotes.push(newNote)
    res.json(newNote)

    fs.writeFile(storedNotes, newNote, "utf8", function (err) {
      if (err) throw err;
  });
  });

// });



// delete
// app.delete("api/notes/:id", function (req,res){



// });
};