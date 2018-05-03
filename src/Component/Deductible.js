import React from 'react';

class Deductible extends React.Component {

  updateDeductible = ({target}) => {
    const {name, value} = target;
    this.props.updateDeductible(name, value);
  }

  render() {
    return (

<div className="deductible-section">
        <table>
          <thead>
          <tr>
            <th colSpan="4">Deductible Section</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td colSpan="2">Deductible Income</td>
            <td colSpan="2"><input type='text' name={this.props.name} onChange={this.updateIncome}/></td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Deductible


