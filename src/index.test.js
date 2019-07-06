// setup the test buy importing expect assertion library from thre chai (tho there are also others)
import jsdom from 'jsdom';
import fs from 'fs'; // where fs stands for the filesystem 
import{expect} from 'chai';
describe('our first test',()=> {
  it('should pass',()=> {
    expect(true).to.equal(true);
  });
});
// test no 2
describe('home.html',() => {
it('hello You',(done)=>{  // we can also call it async by providing a parameter to the callback function 
  const index = fs.readFileSync('./src/home.html','utf-8');  // we get a reference to the reeal file in  filesystem
  jsdom.env(index, function(err,window){
    const h1= window.document.getElementsByTagName('h1')[0]; // get a reference to the mack up we are testing through the call back function that takes in the window object and an err 
    expect(h1.innerHTML).to.equal('hello You')// we go head and assert the value througth the expect method then the to and equal property to provide the real work
    done(); // then we call it here  
    window.close();

  })
});
});
