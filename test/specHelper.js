var assert = {
  isEqual: function(actual, expected) {
    if (actual !== expected) {
      throw new Error(actual + "is not equal to" + expected);
    }
  }
}

