(function(exports) {

  function NoteListView(notelist) {
    this.notelist = notelist;
  }

  NoteListView.prototype.displaySummary = function() {
    var arr = this.notelist.allNotes();
    var str = "<ul><li><div>";
    str += arr.map(function(note) {
      return note.seeSummary();
    }).join("</div></li><li><div>");
    return str += "</div></li></ul>";
  };

  exports.NoteListView = NoteListView;
})(this);
