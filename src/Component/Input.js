import React, {Component} from 'react'

class Input extends Component {

  render() {
    return(
      <input name={this.props.name} onChange={this.props.handleChange}></input>
    )
  }
}

export default Input