module.exports = {
  entry: {
    'triangulate2d.test': "./test/functional/src/triangulate2d.test.js",
    'triangulate3d.test': "./test/functional/src/triangulate3d.test.js",
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ],
  },
  output: {
    path: 'test/functional/lib/',
    filename: "[name].bundle.js"
  },
  devtool: "#source-map",
  node: {
    net: 'empty',
    dns: 'empty',
  }
};
