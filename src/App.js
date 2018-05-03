import React, { Component } from 'react'
import logo from './logo.svg'
import NumberInput from './Component/NumberInput'
import './App.css'
import _ from 'lodash'

class App extends Component {

  state = {
    result: null,
    errorMessages: []
  }

  calculate = () => {
    const {first, second, third} = this.state
    this.setState({
      result: first + second + third
    })
  }

  handleChange = (name, value) => {
    this.setState(
      {
        [name]: value
      }
    )
  }

  handleErrorMessage = (name, message) => {
    const errorMessage = {name, message}
    if (!_.some(this.state.errorMessages, (message) => {return message.name === name})) {
      this.setState({errorMessages: _.concat(this.state.errorMessages, errorMessage)})
    }
  }

  removeMessage = (name) => {
    const newList = _.reject(this.state.errorMessages, ['name', name])
    this.setState({errorMessages: newList})
      // comment
  }

  render () {
    return (
      <div className="App">
        <NumberInput name="first"
                     displayName="first input box"
                     handleErrorMessage={this.handleErrorMessage}
                     removeMessage={this.removeMessage}
                     handleChange={this.handleChange}/>

        <NumberInput name="second"
                     displayName="second input box"
                     handleErrorMessage={this.handleErrorMessage}
                     removeMessage={this.removeMessage}
                     handleChange={this.handleChange}/>

        <NumberInput name="third"
                     displayName="third input box"
                     handleErrorMessage={this.handleErrorMessage}
                     removeMessage={this.removeMessage}
                     handleChange={this.handleChange}/>




        


        <button onClick={this.calculate}>Calculate</button>
        <div className="result">Result: {this.state.result && this.state.result}</div>
        {
          this.state.errorMessages.map((message) => {
            return (
              <div key={message.name}
                   className="errorMessage">{message.message}</div>
            )
          })
        }
      </div>
    )
  }
}

export default App