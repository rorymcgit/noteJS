function testAddNotestoNotesArray(){
  var notelist = new NoteList();
  notelist.createNote("This is one of the notes to add");
  assert.isTrue(notelist.allNotes().length === 3);
}

testAddNotestoNotesArray();
