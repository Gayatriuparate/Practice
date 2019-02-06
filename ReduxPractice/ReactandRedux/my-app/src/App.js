import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { AppBar, Toolbar } from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
      <MuiThemeProvider>
        <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>

        </AppBar>

        <div className="App">
          <div> Age: <span>{this.props.age}</span></div>
          <p></p>
          <button onClick={this.props.onAgeUp}>Age Up</button>
         <span className="Myspan"></span>
          <button onClick={this.props.onAgedown}>Age Down</button>
          <p></p>
          <div className="historyItemD">History<br /></div>
          <div >
            {
              this.props.history.map((el) => (
                <li className="historyItem" key={el.id}
                  onClick={() => this.props.Del(el.id)}>
                  {el.age}
                </li>
              ))
            }
          </div>
        </div>
        </MuiThemeProvider>
     

      // <div className="App">
      //   <div> Age: <span>{this.props.age}</span></div>
      //   <button onClick={this.props.onAgeUp}>Age Up</button>
      //   <button onClick={this.props.onAgedown}>Age Down</button>
      //   <p></p>
      //   <div className="historyItemD">History<br /></div>
      //   <div >
      //     {
      //       this.props.history.map((el) => (
      //         <li className="historyItem" key={el.id} 
      //         onClick={()=>this.props.Del(el.id)}>
      //           {el.age}
      //         </li>
      //       ))
      //     }
      //   </div>
      // </div>
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
