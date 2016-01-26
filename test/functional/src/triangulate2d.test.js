const triangulate2DPolygon = require('../../../').triangulate2DPolygon;
const TriangulateController = require('./mvc/TriangulateController');
const cameraPosition = {x: 0, y: 0, z: 40};

let polygon0 = [
  { x: 0, y: 0 },
  { x: 20, y: 0 },
  { x: 20, y: 10 },
  { x: 0, y: 10 },
];
new TriangulateController(polygon0, triangulate2DPolygon, cameraPosition);

let polygon1 = [
  { x: 0, y: 0 },
  { x: 20, y: 0 },
  { x: 20, y: 10 },
  { x: 30, y: 10 },
  { x: 10, y: 20 },
  { x: 10, y: 10 },
  { x: 0, y: 10 },
];
new TriangulateController(polygon1, triangulate2DPolygon, cameraPosition);
