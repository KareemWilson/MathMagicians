import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [obj, setObj] = useState({
    total: '0',
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const value = e.target.innerHTML;
    const updatedObj = calculate(obj, value);
    setObj(updatedObj);
  };

  return (
    <div className="container">
      <table className="calculator">
        <tbody className="btns-group">
          <tr className="result-container">
            <th colSpan={4} className="result">
              {obj.total}
              {obj.operation}
              {obj.next}
            </th>
          </tr>
          <tr className="btns-row">
            <td onClick={handleClick} aria-hidden="true">
              AC
            </td>
            <td onClick={handleClick} aria-hidden="true">
              +/-
            </td>
            <td onClick={handleClick} aria-hidden="true">
              %
            </td>
            <td
              onClick={handleClick}
              className="orange"
              aria-hidden="true"
            >
              ÷
            </td>
          </tr>
          <tr className="btns-row">
            <td onClick={handleClick} aria-hidden="true">
              7
            </td>
            <td onClick={handleClick} aria-hidden="true">
              8
            </td>
            <td onClick={handleClick} aria-hidden="true">
              9
            </td>
            <td
              onClick={handleClick}
              className="orange"
              aria-hidden="true"
            >
              x
            </td>
          </tr>
          <tr className="btns-row">
            <td onClick={handleClick} aria-hidden="true">
              4
            </td>
            <td onClick={handleClick} aria-hidden="true">
              5
            </td>
            <td onClick={handleClick} aria-hidden="true">
              6
            </td>
            <td
              onClick={handleClick}
              className="orange"
              aria-hidden="true"
            >
              -
            </td>
          </tr>
          <tr className="btns-row">
            <td onClick={handleClick} aria-hidden="true">
              1
            </td>
            <td onClick={handleClick} aria-hidden="true">
              2
            </td>
            <td onClick={handleClick} aria-hidden="true">
              3
            </td>
            <td
              onClick={handleClick}
              className="orange"
              aria-hidden="true"
            >
              +
            </td>
          </tr>
          <tr className="btns-row">
            <td onClick={handleClick} colSpan={2} aria-hidden="true">
              0
            </td>
            <td onClick={handleClick} aria-hidden="true">
              .
            </td>
            <td
              onClick={handleClick}
              className="orange"
              aria-hidden="true"
            >
              =
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calculator;
