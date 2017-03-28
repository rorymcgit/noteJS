var notelist;

window.onload = function() {
  notelist = new NoteList();
  console.log(notelist);
}


function noteListSaveUserContent() {
  notelist.createNote(document.getElementById('note-text').value);
  console.log(notelist);
  document.getElementById('note-text').value = '';
}

document.getElementById("submit-btn").addEventListener("click", function() {
  noteListSaveUserContent();
});
