// this file is not transpiled so it should use commonjs and es5
//register babel to transpile our code before the tests are run
require('babel-register')();

//disable the webpack features that mocha doesnto understand

require.extensions['.css'] = function(){};
