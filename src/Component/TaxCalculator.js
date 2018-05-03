import React, { Component } from 'react'
import Income from './Income'

class TaxCalculator extends Component {
  //calculate tax payable
  render () {
    return (
      <div className="tax-calculator">
        <Income/>
      </div>
    )
  }
}

export default TaxCalculator