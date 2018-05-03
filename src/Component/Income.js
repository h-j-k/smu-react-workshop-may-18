import React from 'react'

class Income extends React.Component {

  render () {
    return (
      <div className="income-section">
        <table>
          <thead>
          <tr>
            <th colSpan="2">Awesome Income Tax Calculator</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>Salary Income</td>
            <td><input/></td>
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Income


