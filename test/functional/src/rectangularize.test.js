const RectangularizeController = require('./mvc/RectangularizeController');
const cameraPosition = {x: 0, y: 0, z: 40};

let polygon0 = [
  { x: 0, y: 0 },
  { x: 20, y: 0 },
  { x: 20, y: 10 },
  { x: 0, y: 10 },
];
new RectangularizeController(polygon0, cameraPosition);

let polygon1 = [
  { x: 0, y: 0 },
  { x: 20, y: 0 },
  { x: 20, y: 10 },
  { x: 10, y: 10 },
  { x: 10, y: 20 },
  { x: 0, y: 20 },
];
new RectangularizeController(polygon1, cameraPosition);

let polygon2 = [
  { x: 0, y: 0 },
  { x: 30, y: 0 },
  { x: 30, y: 20 },
  { x: 20, y: 20 },
  { x: 20, y: 10 },
  { x: 10, y: 10 },
  { x: 10, y: 30 },
  { x: 0, y: 30 },
];
new RectangularizeController(polygon2, cameraPosition);
