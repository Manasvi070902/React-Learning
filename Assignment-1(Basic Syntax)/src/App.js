import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state={
    name: "Mishu"
   }
detailsChangedHandler = (event)=>{

  this.setState({
   name: event.target.value
  })
}
  render() {
    return (
      <div className="App">
       <h1>Hi, I am learning React</h1>

      <UserInput changed={this.detailsChangedHandler} value={this.state.name}></UserInput>
      <UserOutput name={this.state.name} ></UserOutput>
       
      </div>
    
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1',null, 'Does it work now?') )
  }
}

export default App;
