(function(exports){

  function NoteController(notelist){
    this.notelist = notelist;
    this.notelistview = new NoteListView(this.notelist);
  }

  NoteController.prototype.addToHTML = function(){
    document.getElementById('list').innerHTML = this.notelistview.displaySummary();
  };

exports.NoteController = NoteController;

})(this);
