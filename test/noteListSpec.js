
function testCreateNote() {
  var noteList = new NoteList();
  note = noteList.create("this is my note");
  assert.isTrue(note.content === "this is my note");
}

testCreateNote();
