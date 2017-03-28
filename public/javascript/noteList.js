(function(exports){

  var notes = [];

  function createNote (text) {
    note = new Note(text);
    _saveNote(note);
  }

  function allNotes () {
    return notes;
  }

  function _saveNote (note) {
    notes.push(note);
  }

  exports.NoteList = {
    createNote: createNote,
    allNotes: allNotes
  };

})(this);
