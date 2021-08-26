import React, { Component } from 'react'

class ClassOnChange05 extends Component {

  state = {
    message: "",
  };


  render() {
    return (
      <div>
        <h1>onChange Event</h1>
        <input type='text' onChange={(e)=>{
          console.log(e.target.value);
        }} />

      </div>
    )
  }
}


export default ClassOnChange05;
