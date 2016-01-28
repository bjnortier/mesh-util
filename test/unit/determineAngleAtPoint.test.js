var chai = require('chai');
var assert = chai.assert;

var determineAngleAtPoint = require('../../').determineAngleAtPoint;

describe('Get angle at point', function() {

  it('clockwise orientation angles', function() {
    var polygon = [
      {x: 0, y: 0},
      {x: 0, y: 20},
      {x: 10, y: 20},
      {x: 10, y: 10},
      {x: 20, y: 10},
      {x: 20, y: 0},
      {x: 10, y: 0},
    ];
    assert.equal(determineAngleAtPoint(polygon, 0), 90);
    assert.equal(determineAngleAtPoint(polygon, 1), 90);
    assert.equal(determineAngleAtPoint(polygon, 2), 90);
    assert.equal(determineAngleAtPoint(polygon, 3), -90);
    assert.equal(determineAngleAtPoint(polygon, 4), 90);
    assert.equal(determineAngleAtPoint(polygon, 5), 90);
    assert.equal(determineAngleAtPoint(polygon, 6), 0);
  });

});
