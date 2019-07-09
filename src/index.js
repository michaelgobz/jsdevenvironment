import {getUsers ,deleteUser } from './api/userApi';

// the logic to populate our tabl using out api call

getUsers().then(result =>{
  let usersBody = "";
  result.forEach(user=> {
   usersBody+= `<tr>
   <td><a href='#' data-id= "${user.id}" class= "deleteUser">Delete</a></td>
   <td>${user.id}</td>
   <td>${user.firstName}</td>
   <td>${user.lastName}</td>
   <td>${user.Email}</td> 
  </tr>`
  });

// go a head put that to the dom 

global.document.getElementsById('users').innerHTML = usersBody;

const deletelinks = global.document.getElementsByClassName('deleteuser');

//must use arry.from to create the real arry from the dom
// use getElementByClassName to only return an arry like object
Array.from(deletelinks, link =>{
  link.onclick = function(event){
    const element = event.target;
    event.preventDefault();
    deleteuser(element,attributes['data-id'].value);
    const row = element.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
})

})
;
