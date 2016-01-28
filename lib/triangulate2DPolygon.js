var triangulate3DPolygon = require('./triangulate3DPolygon');

module.exports = function(points) {
  var result = triangulate3DPolygon(points.map(function(p) {
    return { x: p.x, y: p.y, z: 0 };
  }));
  return result.map(function(triangle) {
    return triangle.map(function(p) {
      return { x: p.x, y: p.y };
    });
  });
};
