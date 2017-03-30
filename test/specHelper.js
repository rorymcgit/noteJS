var assert = {

  testMessage: function(text) {
      li = document.createElement("li");
      li.innerHTML = text;
      document.getElementById('tests').appendChild(li);
  },

  isEqual: function(actual, expected) {
    var text;
    if (actual !== expected) {
      text = "\nAssertion failed:\n" + actual + "\n**IS NOT EQUAL TO**\n" + expected;
    }
    else {
      text = "TEST PASSED!\n" + actual + "\n**is equal to**\n" + expected;
    }
    this.testMessage(text);
  },

  isTrue: function(assertionToCheck) {
    if(!assertionToCheck){
      text = "\nAssertion failed:\n" + assertionToCheck + "\n**is not truthy.**";
    }
    else {
      text = "TEST PASSED!\n" + assertionToCheck + "\n**is truthy**";
    }
    this.testMessage(text);
  },

  isInstanceOf: function(object, Constructor){
    if(object.constructor !== Constructor){
      text = "\nComparison failed:\n" + object + "\n**is not an instance of.**" + Constructor;
    }
    else {
      text = "TEST PASSED!\n" + object + "\n**is an instance of**" + Constructor;
    }
    this.testMessage(text);
  },

  createMock: function(name, method, returns){
    var obj = {};
    obj[name] = name;
    obj[method] = function(){return returns;};
    return obj;
  }

};
