// this one serves our demo app int the production enviornment 

import  express from 'express';
import  path from 'path';
import  open from'open'
import compression from 'compression';
// import webpack from 'webpack';
// import config from '../webpack.config.dev.js';

 // we ahve gat to set up our port here

 
// i hv commented out all the calls and configs of webapck
 var port =  3000


 // we have to create an instance of the server in this case express
 
/*eslint-disable no-console*/
var App = express()
// include the webpack compiler and the different things we need to use with it 

// const compiler = webpack(config);

// the instanciate it to include our dependencies if any

/*App.use(require('webpack-dev-middileware')(compiler, {
 noinfo: true,
 publicPath: config.output.publicpath
})) */


// configure express to serve static files coz they are the ones we have genrated
// setup gzip compression  so that we can monitor the files and sizes that are being sent over the wire 
App.use(compression());
App.use(express.static('dist'));


App.get('/', function (req, res){

    res.sendFile(path.join(__dirname , '../dist/home.html')) // we serve the file from the dist folder
 })

// another route for our server
/*
App.get('/users',function(req , res ){
  // we gona pass in the data implying that its from a database
  res.json([
  {"id":"1","firstName":"michael","lastName":"Gobz","Email":"michael@example.com"},
  {"id":"2","firstName":"Him","lastName":"Gobz","Email":"Him@example.com"},
  {"id":"2","firstName":"Her","lastName":"Gobz","Email":"Her@example.com"}
      
  ]);
});
*/

// some err handeling

App.listen(port, function (err){

    if (err){
        console.log(err)

    }else{
        open('http://looalhost:'+ port )
    }

})
