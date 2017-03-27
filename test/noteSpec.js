
function testSeeFullContent() {
  var expected = "Birthday Notes here, its my birthday in a few months, give me lots of presents"
  var note = new Note(expected);
  var actual = note.seeFullContent();
  assert.isEqual(actual, expected);
}

function testSummaryHasOnlyTwentyCharacters() {
  var expected = "I am trying to write";
  var note = new Note(expected);
  var actual = note.seeSummary();
  assert.isEqual(actual, expected);
}


testSeeFullContent();
testSummaryHasOnlyTwentyCharacters();

