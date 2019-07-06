import 'whatwg-fetch';
import getbaseUrl from './baseUrl';


// set up thhe base urls th will serve out app 

 const baseUrl = getbaseUrl();


// expeot the public function get
export function getuser(){
  return get('users')
}

// promise and error handling by 

function get(url){
  return fetch(baseUrl + Url).then(onSuccess , onError);
}
// then the onSuccess fucntion to handle that aspect 

function onSuccess(response){
  return response.json();
}

// then the onError fucntion to handle that aspect

function onError(error){
  console.log(error); // eslint-disable-line no console
}
