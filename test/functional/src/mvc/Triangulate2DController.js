const trip = require('triptych');
const $ = trip.$;
const ThreeJSScene = trip.scenes.ThreeJSScene;
const Controller = trip.Controller;
const Model = trip.Model;

const triangulate2DPolygon = require('../../../../').triangulate2DPolygon;
const PolygonOutlineView = require('./PolygonOutlineView');

class Triangulate2DController extends Controller {

  constructor(polygon) {
    super(new Model());
    this.model.polygons = [polygon];

    let sceneElem = $('<div class="testcase"></div>');
    $('body').append(sceneElem);

    let threeJSSceneOptions = {
      cameraPosition: {
        x: 0, y: 0, z: 40,
      },
      cameraUp: {
        x: 0, y: 1, z: 0,
      },
      disableRotate: true,
    };
    let scene = new ThreeJSScene(sceneElem, threeJSSceneOptions);

    this.addView(scene, PolygonOutlineView, {
      color: 0xff0000,
      index: 0,
      linewidth: 2,
    });

    let triangles = triangulate2DPolygon(polygon);
    triangles.forEach((t, i) => {
      this.model.polygons.push(t);
      this.addView(scene, PolygonOutlineView, {color: 0x0000ff, index: i + 1});
    });

    setTimeout(() => {
      scene.zoomTo2DExtents();
    }, 0);
  }

}

module.exports = Triangulate2DController;
