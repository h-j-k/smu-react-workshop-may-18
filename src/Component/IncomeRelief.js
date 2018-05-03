import React from 'react';

class IncomeRelief extends React.Component {

  

  render() {
    return (
      <div className="income-section">
      <form>
        <table>
          <th>
            <td colSpan="2">Income</td>
          </th>
          <tr>
            <td>Employment Income</td>
            <td><input type='text'/></td>
          </tr>
          <tr>
            <td>Earned Income relief</td>
            <td><input name='ageRelief' type='radio' value="55" onCheck={this.incomeRelief}/>Below 55</td>
            <td><input name='ageRelief' type='radio' value="59" onCheck={this.incomeRelief}/>55 to 59</td>
            <td><input name='ageRelief' type='radio' value="60" onCheck={this.incomeRelief}/>60 and Above</td>
          </tr>
          <tr>
            <td>Spouse relief</td>
            <td><input name='spouseRelief' type='radio' value="Y"/>Yes</td>
            <td><input name='spouseRelief' type='radio' value="N"/>No</td>
          </tr>

           <tr>
            <td>Parent relief</td>
            <td><input name='parentRelief' type='radio' value='' />Stay with dependent</td>
            <td><input name='parentRelief' type='radio' value=''/>Does not stay with dependent</td>
          </tr>

           <tr>
            <td>NS relief</td>
            <td><input name='nsRelief' type='radio' value="Y"/>Yes</td>
            <td><input name='nsRelief' type='radio' value="N"/>No</td>
          </tr>
        </table>
        </form>
      </div>
    )
  }
}

export default IncomeRelief


