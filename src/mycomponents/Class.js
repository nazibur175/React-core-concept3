import React, { Component } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Class extends Component {
  ClickMe(a){
    alert("Button Clicked && "+a);
  }
  render() {
    return (
      <div>
        <h1>Hello I am {this.props.name} from Class Compo.</h1>
        <button className='btn btn-primary' onClick={this.ClickMe.bind(this,"Class")}>Click Me</button>
      </div>
    );
  }
}
export default Class;