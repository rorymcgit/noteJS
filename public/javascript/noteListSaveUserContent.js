var notelist;

window.onload = function() {
  notelist = new NoteList();
}


function noteListSaveUserContent() {
  notelist.createNote(document.getElementById('note-text').value);
  document.getElementById('note-text').value = '';
}

document.getElementById("submit-btn").addEventListener("click", function() {
  noteListSaveUserContent();
});
