import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="col">
      <div><span>A:</span><span>{this.props.a}</span></div>
      <button>update A</button>
      
      
      </div>

      <div className="col">
      <div><span>B:</span><span>{this.props.b}</span></div>
      <button>update B</button>
      
      
      </div>
       
     
      </div>
    );
  }
}

export default App;
