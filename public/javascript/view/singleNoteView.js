(function(exports) {

  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.fullNoteHTML = function() {
    return "<span>" + this.note.seeFullContent() + "</span>";
  }

  exports.SingleNoteView = SingleNoteView;
})(this);
