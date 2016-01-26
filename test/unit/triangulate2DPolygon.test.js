var chai = require('chai');
var assert = chai.assert;

var triangulate2DPolygon = require('../../').triangulate2DPolygon;

describe('Triangulate 2D Polygon', function() {

  it('XY triangle', function() {
    var polygon = [
      { x: 0, y: 0 },
      { x: 10, y: 0 },
      { x: 10, y: 10 },
    ];
    var result = triangulate2DPolygon(polygon);
    assert.equal(result.length, 1);
    assert.deepEqual(result[0], [
      { x: 10, y: 10 },
      { x: 0, y: 0 },
      { x: 10, y: 0 },
    ]);
  });

  it('XY rectangle', function() {
    var polygon = [
      { x: 0, y: 0 },
      { x: 20, y: 0 },
      { x: 20, y: 10 },
      { x: 0, y: 10 },
    ];
    var result = triangulate2DPolygon(polygon);
    assert.equal(result.length, 2);
    assert.deepEqual(result[0], [
      { x: 0, y: 10 },
      { x: 0, y: 0 },
      { x: 20, y: 0 }
    ]);
    assert.deepEqual(result[1], [
      { x: 0, y: 10 },
      { x: 20, y: 0 },
      { x: 20, y: 10 },
    ]);
  });

  it('XY polygon', function() {
    var polygon = [
      { x: 0, y: 0 },
      { x: 20, y: 0 },
      { x: 20, y: 10 },
      { x: 30, y: 10 },
      { x: 10, y: 20 },
      { x: 10, y: 10 },
      { x: 0, y: 10 },
    ];
    var result = triangulate2DPolygon(polygon);
    assert.equal(result.length, 5);
    assert.deepEqual(result, [
      [
        { x: 0, y: 10 },
        { x: 0, y: 0 },
        { x: 20, y: 0 }
      ],
      [
        { x: 20, y: 10 },
        { x: 30, y: 10 },
        { x: 10, y: 20 }
      ],
      [
        { x: 20, y: 0 },
        { x: 20, y: 10 },
        { x: 10, y: 20 }
      ],
      [
        { x: 20, y: 0 },
        { x: 10, y: 20 },
        { x: 10, y: 10 }
      ],
      [
        { x: 0, y: 10 },
        { x: 20, y: 0 },
        { x: 10, y: 10 }
      ],
    ]);
  });

});
