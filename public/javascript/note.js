function Note(content) {
  this.content = content;
}

Note.prototype.seeSummary = function() {
  return this.content.slice(0,20);
}
