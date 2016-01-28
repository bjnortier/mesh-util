var Vec2 = require('vecks').Vec2;

module.exports = function(polygon, index) {
  var pl = polygon.length;
  var a = new Vec2(polygon[(index - 1 + pl) % pl]);
  var b = new Vec2(polygon[index]);
  var c = new Vec2(polygon[(index + 1) % pl]);
  var ab = b.sub(a);
  var bc = c.sub(b);

  var theta1 = Math.round(Math.atan2(ab.y, ab.x)/Math.PI*180);
  var theta2 = Math.round(Math.atan2(bc.y, bc.x)/Math.PI*180);
  var theta = theta1 - theta2;
  if (theta < -180) {
    theta += 360;
  }
  if (theta > 180) {
    theta -= 360;
  }
  return theta;
};
