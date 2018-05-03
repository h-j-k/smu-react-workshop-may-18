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
            <td><input/></td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Income


