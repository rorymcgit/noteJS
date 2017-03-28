var assert = {

  isEqual: function(actual, expected) {
    if (actual !== expected) {
      throw new Error("\nAssertion failed:\n" + actual + "\n**IS NOT EQUAL TO**\n" + expected);
    }
    else {
      console.log("TEST PASSED!\n" + actual + "\n**is equal to**\n" + expected);
    };
  },

  isTrue: function(assertionToCheck) {
    if(!assertionToCheck){
      throw new Error("\nAssertion failed:\n" + assertionToCheck + "\n**is not truthy.**");
    }
    else {
      console.log("TEST PASSED!\n" + assertionToCheck + "\n**is truthy**")
    }
  }

};
