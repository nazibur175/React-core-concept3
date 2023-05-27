import React from 'react';

const Data = (props) => {
  return (
    <div className='dataContainer'>
      <h1>Name: {props.name}</h1>
      <h1>Email: {props.email}</h1>
    </div>
  );
};

export default Data;