// var notecontroller;
// var notelist;
//
// window.onload = function () {
//   notelist = new NoteList();
//   notecontroller = new NoteController(notelist);
// };
//
// window.onhashchange = function() {
//   res = document.URL.split('#notes/')[1];
//   notecontroller.addFullHTML(res);
// };
//
// document.getElementById('submit-btn').onclick = function(e) {
//   note = document.getElementById('note-text').value;
//   notelist.createNote(note);
//   notecontroller.addToHTML();
//   e.preventDefault();
// };



// var express = require('express');
//
// var app = express();
//
// var port = 3000;
//
// app.set('view engine', 'ejs');
//
// app.use(express.static('./public'));
//
// app.get('/', function(req, res) {
//   res.render('index');
// });
//
// app.listen(port, function(err) {
//   if (err) throw err;
//   console.log("We are live on Port" + port);
// });
