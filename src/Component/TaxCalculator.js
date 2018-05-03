import React, { Component } from 'react'
import IncomeRelief from './IncomeRelief'
import Income from './Income'
import {calculateTaxPayable} from './CalculatePayable'
import './TaxCalculator.css'


class TaxCalculator extends Component {

  state = {
    income: 0,
    taxPayable: 0
  }

  calculate = () => {
    this.setState({
      taxPayable: calculateTaxPayable(this.state.income)
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
        <div className="taxPayable">Tax Payable: {this.state.taxPayable}</div>
      </div>

    )
  }
}

export default TaxCalculator