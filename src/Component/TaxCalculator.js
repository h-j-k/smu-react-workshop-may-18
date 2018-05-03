import React, { Component } from 'react'
import Income from './Income'

class TaxCalculator extends Component {

  state = {
    income: 0,
    taxPayable: 0
  }

  calculate = () => {
    const {income} = this.state

    this.setState({
      income: income
    })

  }

  updateIncome = (name, value) => {
    this.setState({
      [name]: value
    })
  }


  render () {
    return (
      <div className="tax-calculator">
        <Income
          name="income"
          updateIncome={this.updateIncome}
        />
        <button onClick={this.calculate}>Calculate</button>
        <div className="taxPayable">Tax: {this.state.income}</div>
      </div>
    )
  }
}

export default TaxCalculator// Gary's test