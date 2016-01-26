const Triangulate2DController = require('./mvc/Triangulate2DController');

let polygon0 = [
  { x: 0, y: 0 },
  { x: 20, y: 0 },
  { x: 20, y: 10 },
  { x: 0, y: 10 },
];
new Triangulate2DController(polygon0);

let polygon1 = [
  { x: 0, y: 0 },
  { x: 20, y: 0 },
  { x: 20, y: 10 },
  { x: 30, y: 10 },
  { x: 10, y: 20 },
  { x: 10, y: 10 },
  { x: 0, y: 10 },
];
new Triangulate2DController(polygon1);
