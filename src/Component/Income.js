import React from 'react'

class Income extends React.Component {

  updateIncome = ({target}) => {
    const {name, value} = target
    this.props.updateIncome(name, value)
  }

  render () {
    return (
      <div className="income-section">
        <table>
          <thead>
          <tr>
            <th colSpan="4">Income Tax Calculator</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td colSpan="2">Employment Income</td>
            <td colSpan="2"><input type='text' name={this.props.name} onChange={this.updateIncome}/></td>
          </tr>
          <tr>
            <td>Earned Income relief</td>
            <td><input type='radio' value="55"/>Below 55</td>
            <td><input type='radio' value="59"/>55 to 59</td>
            <td><input type='radio' value="60"/>60 and Above</td>
          </tr>
          <tr>
            <td>Spouse relief</td>
            <td><input type='radio' value="Y"/>Yes</td>
            <td colSpan="2"><input type='radio' value="N"/>No</td>
          </tr>

          <tr>
            <td>Parent relief</td>
            <td><input type='radio' value=''/>Stay with dependent</td>
            <td colSpan="2"><input type='radio' value=''/>Does not stay with dependent</td>
          </tr>

          <tr>
            <td>NS relief</td>
            <td><input type='radio' value="Y"/>Yes</td>
            <td colSpan="2"><input type='radio' value="N"/>No</td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Income


