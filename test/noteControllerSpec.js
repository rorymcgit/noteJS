function testControllerCanBeInstantiated(){
  var notecontroller = new NoteController(new NoteList());
  assert.isInstanceOf(notecontroller, NoteController);
}

function testforInsertingHTML(){
  var initialDOMGetElementByID = document.getElementById;
  var mocknote = assert.createMock('note', 'seeSummary', "Favourite drink: sel");
  var mocknotelist = assert.createMock('notelist', 'allNotes', [mocknote]);
  mocknotelist['createNote'] = function(){};
  var dummyElement = document.createElement('ul');
  document['getElementById'] = function(){return dummyElement;};
  var notecontroller = new NoteController(mocknotelist);

  notecontroller.addToHTML();
  actual = dummyElement.childNodes[0].childNodes[0].innerText;
  expected = "Favourite drink: sel...";
  document.getElementById = initialDOMGetElementByID;
  assert.isEqual(actual, expected);
}

testControllerCanBeInstantiated();
testforInsertingHTML();
