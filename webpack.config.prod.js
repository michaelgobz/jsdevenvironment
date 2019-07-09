import path from 'path';
import webpackConfigDev from './webpack.config.dev';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webapckMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin'

export default {
  debug: true,
  devtool: 'source-map',  // change that to source maps coz thtas what is required for the production
  noInfo: false,
  entry: {
  vendor: path.resolve(__dirname,'src/vendor'),
   main: path.resolve(__dirname, 'src/index')

   // here we can split out production bundles into small componets so that we save on bandwidth and also speed up page load

},
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),// change the output file to dist
    publicPath: '/',
    filename: '[name].[chunkhash].js' // provide a placeholder for any libraries that a referenced in vendor the chunk hash veriable is to supply the file names genearted from the hash codes 
  },
  plugins: [
// generate a seperate CSS file and name it with the hash code that is generated we pass in the file name format into the plugin
new ExtractTextPlugin('[name].[contenthash].css'),

// we use the webapckMD5Hash to help generate the random file names using rhe change in the contents of the files 
new webpackMd5Hash(),

// the plugin for bundel spliting which separates the different sets of bundels
// spacifies the vendor libraries are cached differently
new webpack.optimize.commonsChunkPlugin({
  name:'vendor'
}),
// for the dynamic html generation we will use the webapck html plugin and config it here
// has a reference to our bundled js

new HtmlWebpackPlugin ({
  template: 'src/index.html',
 // add some minificatio 
 minify:{
  removeComments:true, 
  collapseWhiteSpace:true,
  removeRedundantAttributes:true,
  useShortDoctype:true,
  removeEmptyAttributes:true,
  removeStyleLinkTypeAttributes:true,
  KeepClosingLash:true,
  minifyJS: true,
  minifyCSS:true,
  minifyURLs:true

 },
  inject :true,
  // any stuff u define here are available to the markup file s
  trackJsToken :'db755741b4044218b22be7fa7c7aff23'
}),

   // this one elimiates all the duplicates during bundling for the app for that production purpose
   new webpack.optimize.DedupePlugin(),

    // this is where we add our minification logic of calling the method needed to create the minification using the webpack plugins
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ExtractTextPlugin.ectract('css?sourceMap')}  //  we configure the loader to ectarct the css from the source map 
    ]
  }
}
