// const tail = require('../tail');
// const assertArraysEqual = require('../assertArraysEqual');


// assertArraysEqual(tail([5]), '', true);
// assertArraysEqual(tail([5,3]), [3], true);
// assertArraysEqual(tail([5,3,4,4]), [3], false);
// assertArraysEqual(tail([5,3,4,4]), [3,4,4], true);
// assertArraysEqual(tail([]), [3], false);
// assertArraysEqual(tail([4,4]), [3], false);


const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("return [] for [5]", () => {
    assert.deepEqual(tail([5]), []);
  })

  it("return [3] for [5, 3]", () => {
    assert.deepEqual(tail([5,3]), [3]);
  })

  it("return [3, 4, 4] for [5, 3, 4, 4]", () => {
    assert.deepEqual(tail([5,3,4,4]), [3,4,4]);
  })

  it("return [] for []", () => {
    assert.deepEqual(tail([]), []);
  })

  it("return [4] for [4, 4]", () => {
    assert.deepEqual(tail([4,4]), [4]);
  })



});


