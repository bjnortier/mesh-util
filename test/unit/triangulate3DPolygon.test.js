var chai = require('chai');
var assert = chai.assert;

var triangulate3DPolygon = require('../../').triangulate3DPolygon;

describe('Triangulate 3D Polygon', function() {

  it('XY triangle', function() {
    var polygon = [
      {x: 0, y: 0, z: 0},
      {x: 10, y: 0, z: 0},
      {x: 10, y: 10, z: 0},
    ];
    var result = triangulate3DPolygon(polygon);
    assert.equal(result.length, 1);
    assert.deepEqual(result[0], [
      { x: 10, y: 10, z: 0 },
      { x: 0, y: 0, z: 0 },
      { x: 10, y: 0, z: 0 },
    ]);
  });

  it('XY rectangle', function() {
    var polygon = [
      {x: 0, y: 0, z: 0},
      {x: 20, y: 0, z: 0},
      {x: 20, y: 10, z: 0},
      {x: 0, y: 10, z: 0},
    ];
    var result = triangulate3DPolygon(polygon);
    assert.equal(result.length, 2);
    assert.deepEqual(result[0], [
      { x: 0, y: 10, z: 0 },
      { x: 0, y: 0, z: 0 },
      { x: 20, y: 0, z: 0 }
    ]);
    assert.deepEqual(result[1], [
      { x: 0, y: 10, z: 0 },
      { x: 20, y: 0, z: 0 },
      { x: 20, y: 10, z: 0 },
    ]);
  });

  it('XZ rectangle', function() {
    var polygon = [
      {x: 0, y: 0, z: 0},
      {x: 20, y: 0, z: 0},
      {x: 20, y: 0, z: 10},
      {x: 0, y: 0, z: 10},
    ];
    var result = triangulate3DPolygon(polygon);
    assert.equal(result.length, 2);
    assert.deepEqual(result[0], [
      { x: 0, y: 0, z: 10 },
      { x: 0, y: 0, z: 0 },
      { x: 20, y: 0, z: 0 }
    ]);
    assert.deepEqual(result[1], [
      { x: 0, y: 0, z: 10 },
      { x: 20, y: 0, z: 0 },
      { x: 20, y: 0, z: 10 },
    ]);
  });

  it('YZ rectangle', function() {
    var polygon = [
      {x: 0, y: 0, z: 0},
      {x: 0, y: 30, z: 0},
      {x: 0, y: 30, z: 10},
      {x: 0, y: 0, z: 10},
    ];
    var result = triangulate3DPolygon(polygon);
    assert.equal(result.length, 2);
    assert.deepEqual(result[0], [
      { x: 0, y: 0, z: 10 },
      { x: 0, y: 0, z: 0 },
      { x: 0, y: 30, z: 0 }
    ]);
    assert.deepEqual(result[1], [
      { x: 0, y: 0, z: 10 },
      { x: 0, y: 30, z: 0 },
      { x: 0, y: 30, z: 10 },
    ]);
  });

  it.only('XY polygon', function() {
    var polygon = [
      {x: 0, y: 0, z: 0},
      {x: 20, y: 0, z: 0},
      {x: 20, y: 10, z: 0},
      {x: 30, y: 10, z: 0},
      {x: 10, y: 20, z: 0},
      {x: 10, y: 10, z: 0},
      {x: 0, y: 10, z: 0},
    ];
    var result = triangulate3DPolygon(polygon);
    assert.equal(result.length, 5);
    assert.deepEqual(result, [
      [
        { x: 0, y: 10, z: 0 },
        { x: 0, y: 0, z: 0 },
        { x: 20, y: 0, z: 0 }
      ],
      [
        { x: 20, y: 10, z: 0 },
        { x: 30, y: 10, z: 0 },
        { x: 10, y: 20, z: 0 }
      ],
      [
        { x: 20, y: 0, z: 0 },
        { x: 20, y: 10, z: 0 },
        { x: 10, y: 20, z: 0 }
      ],
      [
        { x: 20, y: 0, z: 0 },
        { x: 10, y: 20, z: 0 },
        { x: 10, y: 10, z: 0 }
      ],
      [
        { x: 0, y: 10, z: 0 },
        { x: 20, y: 0, z: 0 },
        { x: 10, y: 10, z: 0 }
      ],
    ]);
  });

});
