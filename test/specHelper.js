var assert = {

  isEqual: function(actual, expected) {
    if (actual !== expected) {
      throw new Error(actual + "is not equal to" + expected);
    }
  },

  isTrue: function(assertionToCheck) {
    if(!assertionToCheck){
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    }
  }

};
