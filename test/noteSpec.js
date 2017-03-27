function testSummaryHasOnlyTwentyCharacters() {
  var expected = "I am trying to write";
  var note = new Note(expected);
  var actual = note.seeSummary();

  assert.isEqual(actual, expected);
}

testSummaryHasOnlyTwentyCharacters();
