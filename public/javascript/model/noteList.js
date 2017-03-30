(function(exports){

  function NoteList() {
    this.notes = [];
  }

  NoteList.prototype.createNote = function (text) {
    note = new Note(text);
    this._saveNote(note);
  };

  NoteList.prototype.allNotes = function() {
    return this.notes;
  };

   NoteList.prototype._saveNote = function(note) {
    this.notes.push(note);
  };

  exports.NoteList = NoteList;

})(this);
