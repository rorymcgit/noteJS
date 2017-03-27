function testSeeFullContent() {
  var expected = "Birthday Notes here, its my birthday in a few months, give me lots of presents"
  var note = new Note(expected);
  var actual = note.seeFullContent();

  assert.isEqual(actual, expected);
}

testSeeFullContent();