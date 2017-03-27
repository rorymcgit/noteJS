function testAddNotestoNotesArray(){
  var notelist = new NoteList();
  notelist.create("This is one of the notes to add")
  assert.isTrue(notelist.allNotes().length === 1)
}

testAddNotestoNotesArray();
