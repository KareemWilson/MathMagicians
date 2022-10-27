import React from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: this.next,
      operation: this.operation,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const value = e.target.innerHTML;
    const obj = calculate(this.state, value);
    this.setState(obj);
  }

  render() {
    const { total } = this.state;
    return (
      <div className="container">
        <table className="calculator">
          <tbody className="btns-group">
            <tr className="result-container">
              <th colSpan={4} className="result">
                { total || 0 }
              </th>
            </tr>
            <tr className="btns-row">
              <td onClick={this.handleClick} aria-hidden="true">AC</td>
              <td onClick={this.handleClick} aria-hidden="true">+/-</td>
              <td onClick={this.handleClick} aria-hidden="true">%</td>
              <td onClick={this.handleClick} className="orange" aria-hidden="true">÷</td>
            </tr>
            <tr className="btns-row">
              <td onClick={this.handleClick} aria-hidden="true">7</td>
              <td onClick={this.handleClick} aria-hidden="true">8</td>
              <td onClick={this.handleClick} aria-hidden="true">9</td>
              <td onClick={this.handleClick} className="orange" aria-hidden="true">x</td>
            </tr>
            <tr className="btns-row">
              <td onClick={this.handleClick} aria-hidden="true">4</td>
              <td onClick={this.handleClick} aria-hidden="true">5</td>
              <td onClick={this.handleClick} aria-hidden="true">6</td>
              <td onClick={this.handleClick} className="orange" aria-hidden="true">-</td>
            </tr>
            <tr className="btns-row">
              <td onClick={this.handleClick} aria-hidden="true">1</td>
              <td onClick={this.handleClick} aria-hidden="true">2</td>
              <td onClick={this.handleClick} aria-hidden="true">3</td>
              <td onClick={this.handleClick} className="orange" aria-hidden="true">+</td>
            </tr>
            <tr className="btns-row">
              <td onClick={this.handleClick} colSpan={2} aria-hidden="true">0</td>
              <td onClick={this.handleClick} aria-hidden="true">.</td>
              <td onClick={this.handleClick} className="orange" aria-hidden="true">=</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
