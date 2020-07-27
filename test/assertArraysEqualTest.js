const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3], true);
assertArraysEqual([1, 2, 3], [1, 0, 3], false);
assertArraysEqual([1, 2, 3], [], false);
assertArraysEqual([], [], true);