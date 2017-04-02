

function testforInsertingFullHTMLContent() {
  var initialDOMGetElementByID = document.getElementById;
  var notelist = new NoteList();

  notelist.createNote("Rory wants to add loads of notes");
  var dummyElement = document.createElement('div');
  var notecontroller = new NoteController(notelist);
  document['getElementById'] = function(){return dummyElement;};
  notecontroller.addFullHTML(0);
  actual = dummyElement.innerHTML;
  expected = "<span>Rory wants to add loads of notes</span>";
  document.getElementById = initialDOMGetElementByID;
  assert.isEqual(actual, expected);
}

testforInsertingFullHTMLContent();
