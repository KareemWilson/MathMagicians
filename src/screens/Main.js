import React from 'react';
import Calculator from '../components/Calculator';

function Main() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
      <h3>Lets do some Math!</h3>
      <Calculator />
    </div>
  );
}

export default Main;
