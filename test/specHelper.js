var assert = {

  isEqual: function(actual, expected) {
    if (actual !== expected) {
      throw new Error("\nAssertion failed:\n" + actual + "\n**IS NOT EQUAL TO**\n" + expected);
    }
    else {
      console.log("TEST PASSED!\n" + actual + "\n**is equal to**\n" + expected);
    }
  },

  isTrue: function(assertionToCheck) {
    if(!assertionToCheck){
      throw new Error("\nAssertion failed:\n" + assertionToCheck + "\n**is not truthy.**");
    }
    else {
      console.log("TEST PASSED!\n" + assertionToCheck + "\n**is truthy**");
    }
  },

  isInstanceOf: function(object, Constructor){
    if(object.constructor !== Constructor){
      throw new Error("\nComparison failed:\n" + object + "\n**is not an instance of.**" + Constructor);
    }
    else {
      console.log("TEST PASSED!\n" + object + "\n**is an instance of**" + Constructor);
    }

  },

  createMock: function(name, method, returns){
    var obj = {};
    obj[name] = name;
    obj[method] = function(){return returns;};
    return obj;
  }

};
