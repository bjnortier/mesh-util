const triangulate3DPolygon = require('../../../').triangulate3DPolygon;
const TriangulateController = require('./mvc/TriangulateController');
const cameraPosition = {x: 40, y: 40, z: 40};

let polygon1 = [
  { x: 0,  y: 0,  z: 0 },
  { x: 20, y: 0,  z: 0 },
  { x: 20, y: 10, z: 0 },
  { x: 30, y: 10, z: 0 },
  { x: 10, y: 20, z: 0 },
  { x: 10, y: 10, z: 0 },
  { x: 0,  y: 10, z: 0 },
];
new TriangulateController(polygon1, triangulate3DPolygon, cameraPosition);

let polygon2 = [
  { x: 0,  y: 0, z: 0  },
  { x: 20, y: 0, z: 0  },
  { x: 20, y: 0, z: 10 },
  { x: 30, y: 0, z: 10 },
  { x: 10, y: 0, z: 20 },
  { x: 10, y: 0, z: 10 },
  { x: 0,  y: 0, z: 10 },
];
new TriangulateController(polygon2, triangulate3DPolygon, cameraPosition);

let polygon3 = [
  { x: 0, y: 0,  z: 0  },
  { x: 0, y: 20, z: 0  },
  { x: 0, y: 20, z: 10 },
  { x: 0, y: 30, z: 10 },
  { x: 0, y: 10, z: 20 },
  { x: 0, y: 10, z: 10 },
  { x: 0, y: 0,  z: 10 },
];
new TriangulateController(polygon3, triangulate3DPolygon, cameraPosition);
