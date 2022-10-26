import React from 'react';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.result = 0;
  }

  render() {
    return (
      <div className="container">
        <table className="calculator">
          <tr className="result-container">
            <td className="result">{this.result}</td>
          </tr>
          <tbody className="btns-group">
            <tr className="btns-row">
              <td>AC</td>
              <td>+/-</td>
              <td>%</td>
              <td className="orange">÷</td>
            </tr>
            <tr className="btns-row">
              <td>7</td>
              <td>8</td>
              <td>9</td>
              <td className="orange">x</td>
            </tr>
            <tr className="btns-row">
              <td>4</td>
              <td>5</td>
              <td>6</td>
              <td className="orange">-</td>
            </tr>
            <tr className="btns-row">
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td className="orange">+</td>
            </tr>
            <tr className="btns-row">
              <td colSpan={2}>0</td>
              <td>.</td>
              <td className="orange">=</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
