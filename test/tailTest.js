const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(tail([5]), '', true);
assertArraysEqual(tail([5,3]), [3], true);
assertArraysEqual(tail([5,3,4,4]), [3], false);
assertArraysEqual(tail([5,3,4,4]), [3,4,4], true);
assertArraysEqual(tail([]), [3], false);
assertArraysEqual(tail([4,4]), [3], false);


