function addNote() {
    document.getElementById('note-text').innerHTML = "Rory wants to add loads of notes";
    document.getElementById('submit-btn').click();
}

function testForAddingTextDisplayingSummary() {
  addNote();
  actual = document.getElementById('list').childNodes[0].childNodes[0].innerHTML;
  expected = "Rory wants to add lo...";
  assert.isEqual(actual, expected);
}


testForAddingTextDisplayingSummary();
