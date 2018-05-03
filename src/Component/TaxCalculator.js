import React, { Component } from 'react'
import IncomeRelief from './IncomeRelief'

class TaxCalculator extends Component {

  state={
    totalTaxRelief:0
  }


  getEarnedIncomeRelief=(age)=>{
    //retrieve age from age radio input
    /*const age=target.value
    if(age==='55')
    {
      this.setState()
        {
          totalTaxRelief:1000
        }
      )
    }
    */
  }

  render () {
    return (
      <div className="tax-calculator">
        <IncomeRelief
        handleIncomeRelief={this.getEarnedIncomeRelief}/>
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

export default TaxCalculator// Gary's test