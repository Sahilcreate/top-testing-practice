//check if char is upperCase or lowerCase
//if it's upperCase
//do the operation between 65 and 90
//it it's lowerCase
//do the operation between 97 and 122

export default function caesarCipher(input, factor) {
  let resultArr = [];
  for (let letterIndex in input) {
    let charCode = input.charCodeAt(letterIndex);
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122)
    ) {
      let char = input[letterIndex];
      if (isLowerCase(char)) {
        resultArr.push(handleLowerCase(char, factor));
      } else if (isUpperCase(char)) {
        resultArr.push(handleUpperCase(char, factor));
      }
    } else {
      resultArr.push(input[letterIndex]);
    }
  }

  return resultArr.join("");
}

function isLowerCase(input) {
  if (input === input.toLowerCase()) {
    return true;
  }
  return false;
}

function isUpperCase(input) {
  if (input === input.toUpperCase()) {
    return true;
  }
  return false;
}

function handleLowerCase(char, factor) {
  const upperLimit = 122;
  const lowerLimit = 97;

  const oldCharCode = char.charCodeAt(0);
  let newCharCode = oldCharCode;

  for (let i = 1; i <= factor; i++) {
    newCharCode = newCharCode + 1;
    if (newCharCode > upperLimit) {
      newCharCode = lowerLimit;
    }
  }

  return String.fromCharCode(newCharCode);
}

function handleUpperCase(char, factor) {
  const upperLimit = 90;
  const lowerLimit = 65;

  const oldCharCode = char.charCodeAt(0);
  let newCharCode = oldCharCode;

  for (let i = 1; i <= factor; i++) {
    newCharCode = newCharCode + 1;
    if (newCharCode > upperLimit) {
      newCharCode = lowerLimit;
    }
  }

  return String.fromCharCode(newCharCode);
}
