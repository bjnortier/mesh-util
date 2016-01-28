const trip = require('triptych');
const THREE = trip.THREE;
const ThreeJSView = trip.views.ThreeJSView;

class PolygonOutlineView extends ThreeJSView {

  constructor(model, scene, options) {
    super(model, scene);
    options.color = (options.color === undefined) ?
      0x0000ff : options.color;
    this.options = options;
  }

  render() {
    const geometry = new THREE.Geometry();
    const polygon = this.model.polygons[this.options.index];
    geometry.vertices = polygon.map((p) => {
      return new THREE.Vector3(p.x, p.y, p.z);
    });
    geometry.vertices.push(geometry.vertices[0]);
    var outline = new THREE.Line(geometry,
      new THREE.LineBasicMaterial({
        color: this.options.color,
        linewidth: this.options.linewidth || 1,
      }));
    this.sceneObject.add(outline);
  }

}

module.exports = PolygonOutlineView;
