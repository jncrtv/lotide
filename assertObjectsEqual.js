//Print Assertion Message
const flagMessage = (flag, act, exp) => {
  const inspect = require('util').inspect;
  
  let checkmark = String.fromCodePoint(0x2705);
  let errormark = String.fromCodePoint(0x274C);
  
  if (flag === true) {
    console.log(`${checkmark} Assertion Passed: ${inspect(act)} === ${inspect(exp)}`);
  } else {
    console.log(`${errormark} Assertion Failed: ${inspect(act)} !== ${inspect(exp)}`);
  }
};




// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  
  let actKeys = Object.keys(actual);
  let expKeys = Object.keys(expected);

  let flag = false;

  if (actKeys.length === expKeys.length) {
    
    for (let i of actKeys) {

      if (actual[i] === expected[i]) {
        
        flag = true;

      }
    }
  }
  flagMessage(flag, actual, expected);
};


assertObjectsEqual({a:1,b:2}, {a:1,b:2});
assertObjectsEqual({a:1,b:2}, {a:4,b:5});
assertObjectsEqual({a:1,b:2}, {a:1,b:2,c:3});
