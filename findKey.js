const findKey = (object, callBack) => {
  
  for (let key in object){

    if (callBack(object[key])){
      return key;
    }
  }
  return undefined;
};


const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => (x.stars === 2)); // => "noma"

console.log(result1);

const result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => (x.stars === 3)); // => "noma"

console.log(result2);