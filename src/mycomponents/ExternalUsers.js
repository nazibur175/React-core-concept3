import React, { useEffect, useState } from 'react';
import Data from './Data';
function ExternalUsers  () {
  
  const [users,setUser]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUser(data))
  },[]);
  return (
    <div>
     <div>
      {
        users.map(user=> <Data name={user.name} email ={user.email}></Data> )
      }
     </div>
    </div>
  );
};

export default ExternalUsers;