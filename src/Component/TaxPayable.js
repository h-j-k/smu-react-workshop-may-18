import React from 'react';
import {calculate} from './CalculatePayable';


class TaxPayable extends React.Component {

    render() {
        return (
          <div className="TaxPayable-section">
          <input name="chargeable_income"
                       displayName="Chargeable income"/>
          <div>{calculate(76550)}</div>
          </div>
        )
    }
}

export default TaxPayable
