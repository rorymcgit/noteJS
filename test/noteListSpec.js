function testAddNotestoNotesArray(){

  NoteList.createNote("This is one of the notes to add");
  assert.isTrue(NoteList.allNotes().length === 2);
}

testAddNotestoNotesArray();
