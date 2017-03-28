(function(exports){

  function Note(text) {
    this.content = text;
  };

  Note.prototype.seeFullContent = function() {
    return this.content;
  };

  Note.prototype.seeSummary = function() {
    return this.content.slice(0,20);
  };

  exports.Note = Note;
  
})(this);
