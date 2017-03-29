var notelist;

window.onload = function() {
  notelist = new NoteList();
  notelistview = new NoteListView(notelist);
}

function getElem(id){
  return document.getElementById(id);
}

function noteListSaveUserContent() {
  notelist.createNote(getElem('note-text').value);
  getElem('note-text').value = '';
  getElem('list').innerHTML = notelistview.displaySummary();
}

getElem("submit-btn").addEventListener("click", function() {
  noteListSaveUserContent();
});

getElem('list').addEventListener("click", function(event) {
  var target = event.target;
  index = target.id;
  note = notelist.allNotes()[index];
  getElem('full_content').innerHTML = note.seeFullContent();
});
