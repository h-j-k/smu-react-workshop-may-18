import React, { Component } from 'react'
import Income from './Income'

class TaxCalculator extends Component {

  render () {
    return (
      <div className="tax-calculator">
        <Income/>
      </div>
    )
  }
}

export default TaxCalculator