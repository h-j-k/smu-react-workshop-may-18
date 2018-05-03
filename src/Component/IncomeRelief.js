import React from 'react';


class IncomeRelief extends React.Component {

  render () {
    return (
      <div className="relief-section">
        <table>
          <tr>
            <td>Earned Income relief</td>
            <td><input name='ageRelief' type='radio' value="55"/>Below 55</td>
            <td><input name='ageRelief' type='radio' value="59"/>55 to 59</td>
            <td><input name='ageRelief' type='radio' value="60"/>60 and Above</td>
          </tr>
          <tr>
            <td>Spouse relief</td>
            <td><input name='spouseRelief' type='radio' value="Y"/>Yes</td>
            <td colSpan="2"><input name='spouseRelief' type='radio' value="N"/>No</td>
          </tr>

          <tr>
            <td>Parent relief</td>
            <td><input name='parentRelief' type='radio' value=''/>Stay with dependent</td>
            <td colSpan="2"><input name='parentRelief' type='radio' value=''/>Does not stay with dependent</td>
          </tr>

          <tr>
            <td>NS relief</td>
            <td><input name='nsRelief' type='radio' value="Y"/>Yes</td>
            <td colSpan="2"><input name='nsRelief' type='radio' value="N"/>No</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default IncomeRelief