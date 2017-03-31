function testSingleNoteView() {
  var mocknote = assert.createMock('note', 'seeFullContent', "Favourite drink: seltzer");
  var singleNoteView = new SingleNoteView(mocknote);
  var actual = singleNoteView.fullNoteHTML();
  var expected = "<span>Favourite drink: seltzer</span>";
  assert.isEqual(actual, expected);
}

testSingleNoteView();
