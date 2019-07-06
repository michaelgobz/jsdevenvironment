import  express from 'express';
import  path from 'path';
import  open from'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';

 // we ahve gat to set up our port here

 

 var port =  3000


 // we have to create an instance of the server in this case express
 
/*eslint-disable no-console*/
var App = express()
// include the webpack compiler and the different things we need to use with it 

const compiler = webpack(config);

// the instanciate it to include our dependencies if any

App.use(require('webpack-dev-middileware')(compiler, {
 noinfo: true,
 publicPath: config.output.publicpath
}))

App.get('/', function (req, res){

    res.sendFile(path.join(__dirname , '../src/home.html'))
})

// another route for our server

App.get('/users',function(req , res ){
  // we gona pass in the data implying that its from a database
  res.json([
  {"id":"1","firstName":"michael","lastName":"Gobz","Email":"michael@example.com"},
  {"id":"2","firstName":"Him","lastName":"Gobz","Email":"Him@example.com"},
  {"id":"2","firstName":"Her","lastName":"Gobz","Email":"Her@example.com"}
      
  ]);
});

// some err handeling

App.listen(port, function (err){

    if (err){
        console.log(err)

    }else{
        open('http://looalhost:'+ port )
    }

})
