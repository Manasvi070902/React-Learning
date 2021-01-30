import React, { Component } from 'react'
import './App.css';

import Validation from "./Validation/Validation"
import Char from "./Char/Char"
class App extends Component {

  state = {
    input: ''
  }
  textlengthHandler = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  deleteCharHandler = (index) => {
  const text= this.state.input.split('');
  text.splice(index,1);
  const updatedText = text.join('');
  this.setState({input : updatedText})

  }

  render() {

    const charList = this.state.input.split('').map((ch,index) => {
      return <Char character={ch} key={index} clicked={()=> this.deleteCharHandler(index)}/>
    })
    return (
      <div className="App">
        <input type="text" onChange={this.textlengthHandler} value={this.state.input}></input>
        <p>Text : {this.state.input}</p>
        <Validation length={this.state.input.length}/>
       {charList}
      </div>
    );
  }
}

export default App;
