const eqArrays = function(arr1, arr2) {
  if (arr1.length === arr2.length){
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        
        return false;
      }
    }
    return true;
  }
  return false;
};


const eqObjects = function(actual, expected) {
  
  let act = Object.keys(actual);
  let exp = Object.keys(expected);

  let checkmark = String.fromCodePoint(0x2705);
  let errormark = String.fromCodePoint(0x274C);

  let flag = false;

  if (act.length === exp.length) {
    
    for (let i of act) {

      if (Array.isArray(actual[i]) && Array.isArray(expected[i])){
        
        flag = eqArrays(actual[i], expected[i]);

      } else if (actual[i] === expected[i]) {
        
        flag = true;

      }
    }
  } 

  if (flag === true) {
    console.log(`${checkmark} Assertion Passed: ${act} === ${exp}`);
  } else {
    console.log(`${errormark} Assertion Failed: ${act} !== ${exp}`);
  }
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false

const abcd = { a: "1", b: "2", c: "3" , d: "4"};
eqObjects(abcd, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
console.log(cd,dc);
const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
console.log(cd,cd2);