import React from 'react';

class Income extends React.Component {


  



  render() {
    return (
      <div className="income-section">
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
            <td><input type='radio' value="55"/>Below 55</td>
            <td><input type='radio' value="59"/>55 to 59</td>
            <td><input type='radio' value="60"/>60 and Above</td>
          </tr>
          <tr>
            <td>Spouse relief</td>
            <td><input type='radio' value="Y"/>Yes</td>
            <td><input type='radio' value="N"/>No</td>
          </tr>

           <tr>
            <td>Parent relief</td>
            <td><input type='radio' value='' />Stay with dependent</td>
            <td><input type='radio' value=''/>Does not stay with dependent</td>
          </tr>

           <tr>
            <td>NS relief</td>
            <td><input type='radio' value="Y"/>Yes</td>
            <td><input type='radio' value="N"/>No</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Income


