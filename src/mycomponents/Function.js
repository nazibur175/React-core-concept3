import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Function(props) {
  function ClickMe(a){
    alert("Button Clicked && "+a);
  }
  return (
    <div>
      <h1>Hello I am {props.name} from Function compo</h1>
      <button className='btn btn-secondary' onClick={ClickMe.bind(this,"Function")}>Click Me</button>
    </div>
  );
}

export default Function;