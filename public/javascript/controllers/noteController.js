(function(exports){

  function NoteController(notelist){
    this.notelist = notelist;
    this.notelistview = new NoteListView(this.notelist);
  }

  NoteController.prototype.addToHTML = function(){
    document.getElementById('list').innerHTML = this.notelistview.displaySummary();
  };

  NoteController.prototype.addFullHTML = function(index) {
    singleNoteView = new SingleNoteView(this.notelist.allNotes()[index]);
    document.getElementById('full-note').innerHTML = singleNoteView.fullNoteHTML();
  };

  NoteController.prototype.lookForHashChange = function () {
    window.onhashchange = function() {
      res = document.URL.split('#notes/')[1];
      notecontroller.addFullHTML(res);
    };
  };

  NoteController.prototype.createNewNote = function () {
    document.getElementById('submit-btn').onclick = function(e) {
      note = document.getElementById('note-text').value;
      notelist.createNote(note);
      notecontroller.addToHTML();
      document.getElementById('note-text').value = '';
      e.preventDefault();
    };
  };

  exports.NoteController = NoteController;
})(this);
