var chai = require('chai');
var assert = chai.assert;

var isClockwise = require('../../').isClockwise;

describe('Is polygon clockwise?', function() {

  it('triangles', function() {
    assert.isTrue(isClockwise([
      {x: 0, y: 0},
      {x: 0, y: 10},
      {x: 10, y: 10},
    ]));
    assert.isFalse(isClockwise([
      {x: 0, y: 0},
      {x: 10, y: 0},
      {x: 10, y: 10},
    ]));
  });

  it('rectangles', function() {
    assert.isTrue(isClockwise([
      {x: 0, y: 0},
      {x: 0, y: 10},
      {x: 10, y: 10},
      {x: 10, y: 0},
    ]));
    assert.isFalse(isClockwise([
      {x: 0, y: 0},
      {x: 10, y: 0},
      {x: 10, y: 10},
      {x: 0, y: 10},
    ]));
  });

  it('more complex shapes', function() {
    assert.isTrue(isClockwise([
      {x: 0, y: 0},
      {x: 0, y: 20},
      {x: 10, y: 20},
      {x: 10, y: 10},
      {x: 20, y: 10},
      {x: 20, y: 0},
    ]));
    assert.isFalse(isClockwise([
      {x: 0, y: 0},
      {x: 20, y: 0},
      {x: 20, y: 10},
      {x: 10, y: 10},
      {x: 10, y: 20},
      {x: 0, y: 20},
    ]));
  });

});
