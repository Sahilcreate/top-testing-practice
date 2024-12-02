const calculator = {
  add: function (a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNaN(numB)) {
      throw new Error("Inputs should only be numbers.");
    }

    return numA + numB;
  },

  subtract: function (a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNaN(numB)) {
      throw new Error("Inputs should only be numbers.");
    }
    return numA - numB;
  },

  divide: function (a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNaN(numB)) {
      throw new Error("Inputs should only be numbers.");
    }

    return numA / numB;
  },

  multiply: function (a, b) {
    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNaN(numB)) {
      throw new Error("Inputs should only be numbers.");
    }

    return numA * numB;
  },
};

export default calculator;
