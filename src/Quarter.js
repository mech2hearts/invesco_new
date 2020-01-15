import React, { Component } from 'react'

class Quarter extends Component {
  render() {
    return (
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Company</th>
            <th scope="col">Ticker</th>
            <th scope="col">Average Revenue Growth</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
export default Quarter
