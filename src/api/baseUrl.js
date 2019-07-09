export default function getBaseUrl(){
  /*const inDevelopement = window.location.hostname === 'localhost';
  return inDevelopement ? 'https://localhost:3001': '/';
  */
  //  we have to  update our urls to point to a mock api  if its there

  return getQueryStringParamterByName('useMockAPi' ? 'https://localhost:3001' : 'https://protected-peak-77279.herokuapp.com/ ')// the second url point to the hosted ap1 at heroku 


//  then here wee have to declare out getQueryStringParamaterByName

 function getQueryStringParamaterByName(name, url){

  if(!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new regex ("[?&]"+name + "(=([^&#]*)|&|#|$"),
     results = regex.exec(url);
     if(!results) return null;
     if(!result[2]) return '';

     return decodeURIComponent(result[2].replace(/\+/g, " "));

 } 
