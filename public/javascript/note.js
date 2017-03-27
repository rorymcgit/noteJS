function Note(text) {
  this.content = text;
};

Note.prototype.seeFullContent = function() {
  return this.content;
};