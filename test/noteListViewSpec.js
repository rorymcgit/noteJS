function testNoteListView() {
  var expected = "<li><a href='#' id='0'>This is note one's s...</a></li><li><a href='#' id='1'>This is note two's s...</a></li>";
  var notelist = new NoteList();
  notelist.createNote("This is note one's summary");
  notelist.createNote("This is note two's summary");
  var notelistview = new NoteListView(notelist);
  assert.isEqual(notelistview.displaySummary(), expected);
}

testNoteListView();
