const assertArraysEqual = function(actual, expected) {
  if (actual && expected) {
    let checkmark = String.fromCodePoint(0x2705);
    let errormark = String.fromCodePoint(0x274C);
    
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] === expected[i]) {
        console.log(`${checkmark} Assertion Passed: ${actual} === ${expected}`);
        return;
      }
    }
    console.log(`${errormark} Assertion Failed: ${actual} !== ${expected}`);
    return;
  } else {
    console.log('Array undefined. Makre sure actual and expected arrays are entered');
  }
};

const assertEqual = function(actual, expected) {
  let checkmark = String.fromCodePoint(0x2705);
  let errormark = String.fromCodePoint(0x274C);
  if (actual === expected) {
    console.log(`${checkmark} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${errormark} Assertion Failed: ${actual} !== ${expected}`);
  }
};

//find index of letter and return in an object
const letterPositions = function(sentence){

  //pass on to strArray to remove whitespace
  let tempArr = sentence.split('');
  let strArray = [];

  for (let i in tempArr) {
    if (tempArr[i] !== ' ') {
      strArray.push(tempArr[i]);
    }
  }

  //initialize object result
  const result = {};

  for(let i = 0; i < strArray.length; i++){
    if (!result[strArray[i]]){
      result[strArray[i]] = [i];
    } else {
      result[strArray[i]].push(i);
    }

  }

  return result;
};



console.log(assertArraysEqual(letterPositions("hello").e, [1]));
console.log(assertArraysEqual(letterPositions("hello").h, [0]));
console.log(assertArraysEqual(letterPositions("hello").l, [2, 3]));

