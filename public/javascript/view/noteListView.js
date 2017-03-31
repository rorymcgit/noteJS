(function(exports) {

  function NoteListView(notelist) {
    this.notelist = notelist;
  }

  NoteListView.prototype.displaySummary = function() {
    var arr = this.notelist.allNotes();
    var str = "";
    for(var i = 0; i < arr.length; i++){
      str += "<li><a href='#notes/"+ i + "' id='"+ i + "'>" + arr[i].seeSummary() + '...' + "</a></li>";
    }
    return str;
  };

  exports.NoteListView = NoteListView;
})(this);
