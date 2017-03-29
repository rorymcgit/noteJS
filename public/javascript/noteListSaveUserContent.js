var notelist;

window.onload = function() {
  notelist = new NoteList();
  notelistview = new NoteListView(notelist);
}

function getIt(id){
  return document.getElementById(id);
}

function noteListSaveUserContent() {
  notelist.createNote(getIt('note-text').value);
  getIt('note-text').value = '';
  getIt('list').innerHTML = notelistview.displaySummary();
}

getIt("submit-btn").addEventListener("click", function() {
  noteListSaveUserContent();
});

getIt('list').addEventListener("click", function() {
  children = getIt('list').childNodes;
});


function getEventTarget(e) {
    e = e || window.event;
    return e.target || e.srcElement;
}

var ul = getIt('list');
ul.onclick = function(event) {
    var target = getEventTarget(event);
    console.log(target);
    console.log(target.id);
index = target.id;
note = notelist.allNotes()[index];
getIt('full_content').innerHTML = note.seeFullContent();
};
