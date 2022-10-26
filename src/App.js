import React from 'react';
import './App.css';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <Calculator />;
  }
}

export default App;
