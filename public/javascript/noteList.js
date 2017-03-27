function NoteList() {

}

NoteList.prototype.create = function(text) {
  note = new Note(text);
  return note;
};
