var Vec2 = require('vecks').Vec2;

function isAllRightAngles(polygon) {
  for (var i = 0; i < polygon.length; ++i) {
    var a = polygon[i];
    var b = polygon[(i + 1) % polygon.length];
    var c = polygon[(i + 2) % polygon.length];

    var straight = (a.x === b.x === c.x) || (a.y === b.y === c.y);
    var updown = (a.y === b.y) && (b.x === c.x);
    var leftright = (a.x === b.x) && (b.y === c.y);
    if (!(straight || updown || leftright)) {
      return false;
    }
  }
  return true;
}

function hasCoincidentPoints(polygon) {
  for (var i = 0; i < polygon.length; ++i) {
    var a = new Vec2(polygon[i]);
    var b = new Vec2(polygon[(i + 1) % polygon.length]);
    if (a.sub(b).length() < 1e-12) {
      return true;
    }
  }
  return false;
}

/**
 * Takes a polygon with right-angled corners and
 * returns a list of rectangles. Throws an error
 * if any corners are not right angles
 */
module.exports = function(polygon) {
  if (polygon.length < 4) {
    throw new Error('at least 4 points required for rectangularisation');
  }
  if (hasCoincidentPoints(polygon)) {
    throw new Error('polygon contains coincident points');
  }
  if (!isAllRightAngles(polygon)) {
    throw new Error('polygon has angles that are not right angles');
  }

  if (polygon.length === 4) {
    return [polygon.slice(0)];
  }

};
