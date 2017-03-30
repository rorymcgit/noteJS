var assert = {

  testMessage: function(text, color) {
      li = document.createElement("li");
      li.innerHTML = text;
      li.style.color = color;
      document.getElementById('tests').appendChild(li);
  },

  isEqual: function(actual, expected) {
    if (actual !== expected) {
      text = "\nASSERTION FAILED:\n" + actual + "\n**IS NOT EQUAL TO**\n" + expected;
      color = "red";
    }
    else {
      text = "TEST PASSED!\n" + actual + "\n**is equal to**\n" + expected;
      color = "green";
    }
    this.testMessage(text, color);
  },

  isTrue: function(assertionToCheck) {
    if(!assertionToCheck){
      text = "\ASSERTION FAILED:\n" + assertionToCheck + "\n**is not truthy.**";
      color = "red"
    }
    else {
      text = "TEST PASSED!\n" + assertionToCheck + "\n**is truthy**";
      color = "green";

    }
    this.testMessage(text, color);
  },

  isInstanceOf: function(object, Constructor){
    if(object.constructor !== Constructor){
      text = "\nCOMPARISON FAILED:\n" + object + "\n**is not an instance of.**" + Constructor;
      color = "red";
    }
    else {
      text = "TEST PASSED!\n" + object + "\n**is an instance of**" + Constructor;
      color = "green";

    }
    this.testMessage(text, color);
  },

  createMock: function(name, method, returns){
    var obj = {};
    obj[name] = name;
    obj[method] = function(){return returns;};
    return obj;
  }

};
