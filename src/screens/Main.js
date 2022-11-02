import React from 'react';
import Calculator from '../components/Calculator';

function Main() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <h2 style={{ fontSize: 60, color: 'rgb(238, 154, 89)' }}>Lets do some Math!</h2>
      <Calculator />
    </div>
  );
}

export default Main;
