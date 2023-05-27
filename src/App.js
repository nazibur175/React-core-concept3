import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Function from './mycomponents/Function';
import Class from './mycomponents/Class';
import ExternalUsers from './mycomponents/ExternalUsers';


function App() {
  return (
    <div className="App">
        <ExternalUsers></ExternalUsers>
        {/* <User></User> */}

        {/* <Counter></Counter> */}
        {/* <Function name="Nazibur Rahman"></Function>
        <Class name="Nazibur Rahman"></Class> */}
    </div>
  );
}
// function Counter(){
//   const [count ,setCount]=useState(50);
//   const increaseCount =()=>{
//     const newCount = count+1;
//     setCount(newCount);
//   }
//   const decreaseCount =()=>{
//     const newCount = count-1;
//     setCount(newCount);
//   }
//   return(
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//     </div>
//   )
// }

export default App;
