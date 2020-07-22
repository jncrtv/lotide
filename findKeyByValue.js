const assertEqual = function(actual, expected) {
  let checkmark = String.fromCodePoint(0x2705);
  let errormark = String.fromCodePoint(0x274C);
  if (actual === expected) {
    console.log(`${checkmark} Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`${errormark} Assertion Failed: ${actual} !== ${expected}`);
  }
};

//checks obj for keys matching value parameter
const findKeyByValue = function(obj, value) {

  let result = undefined;

  for (let key in obj) {
    if (obj[key] === value) {
  
      result = key;
    }
  }
  return result;
};


const bestTVShowsByGenre = {
  'sci_fi': "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Sandwhich"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
