var determineAngleAtPoint = require('./determineAngleAtPoint');

module.exports = function(polygon) {
  var acc = 0;
  var pl = polygon.length;
  for (var i = 0; i < pl; ++i) {
    acc += determineAngleAtPoint(polygon, i);
  }
  return acc === 360;
};
