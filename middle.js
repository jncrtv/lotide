const middle = function(arr) {
  let length = arr.length;
  let result = [];

  // checks to see if array is empty
  
  if (length > 2) {
    let remainder = length % 2;
    
    //check to see if array length is even
    if (remainder === 0) {
      let index1 = length / 2;
      let index2 = index1 - 1;

      result.push(arr[index2], arr[index1]);

    } else {
      let index3 = (length - remainder) / 2;

      result.push(arr[index3]);
    }
  } 
  return result;
   
};

module.exports = middle;




