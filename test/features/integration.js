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

function testForDisplayingFullContent(){
  document.getElementById('0').click();
  setTimeout(function(){
    actual = document.getElementById('full-note').innerHTML;
    expected = "<span>Rory wants to add loads of notes</span>";
    assert.isEqual(actual, expected);
  }, 2000);

}


testForAddingTextDisplayingSummary();
testForDisplayingFullContent();
