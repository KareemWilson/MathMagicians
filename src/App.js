import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import NavBar from './components/NavBar';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <NavBar />
        <Calculator />
      </>
    );
  }
}

export default App;
