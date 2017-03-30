function testControllerCanBeInstantiated(){
  var notecontroller = new NoteController(new NoteList());
  assert.isInstanceOf(notecontroller, NoteController);
}

function testforInsertingHTML(){
  var mocknote = assert.createMock('note', 'seeSummary', "Favourite drink: sel");
  var mocknotelist = assert.createMock('notelist', 'allNotes', [mocknote]);
  var notecontroller = new NoteController(mocknotelist);
  var dummyElement = document.createElement('ul');
  document['getElementById'] = function(){return dummyElement;};
  notecontroller.addToHTML();
  actual = dummyElement.childNodes[0].childNodes[0].innerText;
  expected = "Favourite drink: sel...";
  assert.isEqual(actual, expected);
}

testControllerCanBeInstantiated();
testforInsertingHTML();
