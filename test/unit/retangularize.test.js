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
        {x: 9.999, y: 20},
        {x: 0, y: 20},
      ]);
    }, 'polygon has angles that are not right angles');
  });

  it('rectangle', function() {
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

  it('rectangle with extra point', function() {
    var result = rectangularize([
      {x: 0, y: 0},
      {x: 10, y: 0},
      {x: 10, y: 10},
      {x: 5, y: 10},
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

  it('single ear counterclockwise after is shorter', function() {
    var result = rectangularize([
      {x: 0, y: 0},
      {x: 20, y: 0},
      {x: 20, y: 10},
      {x: 10, y: 10},
      {x: 10, y: 20},
      {x: 0, y: 20},
    ]);
    assert.deepEqual(result, [
      [
        {x: 0, y: 0},
        {x: 20, y: 0},
        {x: 20, y: 10},
        {x: 0, y: 10},
      ],
      [
        {x: 0, y: 10},
        {x: 10, y: 10},
        {x: 10, y: 20},
        {x: 0, y: 20},
      ]
    ]);
  });

  it('single ear counterclockwise before is shorter', function() {
    var result = rectangularize([
      {x: 0, y: 0},
      {x: 10, y: 0},
      {x: 10, y: 10},
      {x: -10, y: 10},
      {x: -10, y: -10},
      {x: 0, y: -10},
    ]);
    assert.deepEqual(result, [
      [
        {x: 0, y: 0},
        {x: 10, y: 0},
        {x: 10, y: 10},
        {x: 0, y: 10},
      ],
      [
        {x: 0, y: 10},
        {x: -10, y: 10},
        {x: -10, y: -10},
        {x: 0, y: -10},
      ]
    ]);
  });

  it('single ear clockwise after is shorter', function() {
    var result = rectangularize([
      {x: 0, y: 0},
      {x: 0, y: 20},
      {x: 10, y: 20},
      {x: 10, y: 10},
      {x: 20, y: 10},
      {x: 20, y: 0},
    ]);
    assert.deepEqual(result, [
      [
        {x: 0, y: 0},
        {x: 0, y: 20},
        {x: 10, y: 20},
        {x: 10, y: 0},
      ],
      [
        {x: 10, y: 0},
        {x: 10, y: 10},
        {x: 20, y: 10},
        {x: 20, y: 0},
      ]
    ]);
  });

  it('single ear counterclockwise before is shorter', function() {
    var result = rectangularize([
      {x: 0, y: 0},
      {x: 0, y: -10},
      {x: -10, y: -10},
      {x: -10, y: 10},
      {x: 10, y: 10},
      {x: 10, y: 0},
    ]);
    assert.deepEqual(result, [
      [
        {x: 0, y: 0},
        {x: 0, y: -10},
        {x: -10, y: -10},
        {x: -10, y: 0},
      ],
      [
        {x: -10, y: 0},
        {x: -10, y: 10},
        {x: 10, y: 10},
        {x: 10, y: 0},
      ]
    ]);
  });

  it('empiric failure', function() {
    var result = rectangularize([
      { x: 0, y: 0 },
      { x: 30, y: 0 },
      { x: 30, y: 20 },
      { x: 20, y: 20 },
      { x: 20, y: 10 },
      { x: 10, y: 10 },
      { x: 10, y: 30 },
      { x: 0, y: 30 },
    ]);
    assert.deepEqual(result, [
      [
        { x: 30, y: 0 },
        { x: 30, y: 20 },
        { x: 20, y: 20 },
        { x: 20, y: 0 }
      ],
      [
        { x: 0, y: 0 },
        { x: 20, y: 0 },
        { x: 20, y: 10 },
        { x: 0, y: 10 }
      ],
      [
        { x: 0, y: 10 },
        { x: 10, y: 10 },
        { x: 10, y: 30 },
        { x: 0, y: 30 }
      ]
    ]);
  });

});
