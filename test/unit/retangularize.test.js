var chai = require('chai');
var assert = chai.assert;

var rectangularize = require('../../').rectangularize;

describe('Rectangularize a polygon with right-angled corners', function() {

  it('checks there are at least points', function() {
    assert.throws(function() {
      rectangularize([
        {x: 0, y: 0},
        {x: 10, y: 0},
        {x: 10, y: 0},
      ]);
    }, 'at least 4 points required for rectangularisation');
  });

  it('checks points are non-coincident', function() {
    assert.throws(function() {
      rectangularize([
        {x: 0, y: 0},
        {x: 10, y: 0},
        {x: 10, y: 0},
        {x: 10, y: 0},
      ]);
    }, 'polygon contains coincident points');

    assert.throws(function() {
      rectangularize([
        {x: 0, y: 0},
        {x: 10, y: 0},
        {x: 10, y: 0},
        {x: 0, y: 0},
      ]);
    }, 'polygon contains coincident points');
  });

  it('checks that the polygon has right angles', function() {
    assert.throws(function() {
      rectangularize([
        {x: 0, y: 0},
        {x: 10, y: 0},
        {x: 10, y: 10},
        {x: 0, y: 20},
      ]);
    }, 'polygon has angles that are not right angles');

    assert.throws(function() {
      rectangularize([
        {x: 0, y: 0},
        {x: 10, y: 0},
        {x: 10, y: 10},
        {x: 10, y: 19.999},
        {x: 0, y: 19.999},
      ]);
    }, 'polygon has angles that are not right angles');
  });

  it('simple', function() {
    var result = rectangularize([
      {x: 0, y: 0},
      {x: 10, y: 0},
      {x: 10, y: 10},
      {x: 0, y: 10},
    ]);
    assert.deepEqual(result, [
      [
        {x: 0, y: 0},
        {x: 10, y: 0},
        {x: 10, y: 10},
        {x: 0, y: 10},
      ]
    ]);
  });

});
