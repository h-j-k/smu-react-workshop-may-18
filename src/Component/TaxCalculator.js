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
      this.setState(
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
      </div>

    )
  }
}

export default TaxCalculator
// Gary's test
