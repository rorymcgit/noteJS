(function(exports){

  function NoteController(notelist){
    this.notelist = notelist;
    this.notelist.createNote("Favourite drink: seltzer");
    this.notelist.createNote("Rory wants to add loads of notes");
    this.notelist.createNote("John has a good sleep last night");
    this.notelist.createNote("Vicky, thanks for the dark chocolate with sea salt");
    this.notelistview = new NoteListView(this.notelist);
  }

  NoteController.prototype.addToHTML = function(){
    document.getElementById('list').innerHTML = this.notelistview.displaySummary();
  };

  NoteController.prototype.addFullHTML = function(index) {
    singleNoteView = new SingleNoteView(this.notelist.allNotes()[index]);
    document.getElementById('full-note').innerHTML = singleNoteView.fullNoteHTML();
  }





  exports.NoteController = NoteController;
})(this);
