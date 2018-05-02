import React, { Component } from 'react';
import logo from './logo.svg';
import Input from './Component/Input'
import './App.css';

class App extends Component {

  state = {
    result: null
  }

  calculate = () => {
    const {first, second} = this.state;
    this.setState({
      result: first + second
    })
  }

  handleChange = ({target}) => {
    this.setState(
      {
        [target.name]: parseInt(target.value)
      }
    )
  }

  render() {
    return (
      <div className="App">
        <Input name="first" handleChange={this.handleChange}/>
        <Input name="second" handleChange={this.handleChange}/>
        <button onClick={this.calculate}>Calculate</button>
        <div className="result">Result: {this.state.result && this.state.result}</div>
      </div>
    );
  }
}

export default App;