var assert = {
  isEqual: function(actual, expected) {
    if(actual !== expected) {
      throw new Error("Expected" + actual + " to equal " + expected);
    }
  }
};
