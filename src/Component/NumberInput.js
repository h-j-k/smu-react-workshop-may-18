import React, {Component} from 'react'
import _ from 'lodash'

class NumberInput extends Component {

  validateInput = (event) => {
    const target = event.target
    const {name, value} = target
    if (!isNaN(target.value)) {
      this.props.removeMessage(this.props.name)
      this.props.handleChange(name, _.toNumber(value))
    } else {
      this.props.handleErrorMessage(this.props.name, `${this.props.displayName} is not a number`)
    }
  }

  render() {
    return(
      <input
        name={this.props.name}
        onChange={this.validateInput}/>
    )
  }
}

export default NumberInput