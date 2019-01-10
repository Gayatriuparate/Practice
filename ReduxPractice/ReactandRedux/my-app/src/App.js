import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
  // state={
  //   age:21
  // }
  // onAgeUp=()=>{
  //  this.state.age=this.state.age+1;
  //  this.setState(this.state);
  // }
  // onAgedown=()=>{
  //   this.state.age=this.state.age-1;
  //   this.setState(this.state);
  //  }
  render() {
    return (
      <div className="App">
        <div> Age: <span>{this.props.age}</span></div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgedown}>Age Down</button>
        <p></p>
        <div className="historyItemD">History<br /></div>
        <div >
          {
            this.props.history.map((el) => (
              <li className="historyItem" key={el.id} 
              onClick={()=>this.props.Del(el.id)}>
                {el.age}
              </li>
            ))
          }
        </div>


      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    age: state.age,
    history: state.history
  }
};

const mapDispathToProns = (dispatch) => {
  return {
    onAgeUp: () => dispatch({ type: 'ADD', value: 1 }),
    onAgedown: () => dispatch({ type: 'SUB', value: 1 }),
    Del: (id) => dispatch({ type: 'Del', key: id })

  }
}


export default connect(mapStateToProps, mapDispathToProns)(App);
