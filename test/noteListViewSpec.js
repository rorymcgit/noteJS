function testNoteListView() {
  var expected = "<ul><li><div>This is note one's s</div></li><li><div>This is note two's s</div></li></ul>";
  var notelist = new NoteList();
  notelist.createNote("This is note one's summary");
  notelist.createNote("This is note two's summary");
  var notelistview = new NoteListView(notelist);
  assert.isEqual(notelistview.displaySummary(), expected);
}

testNoteListView();
