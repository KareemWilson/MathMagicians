import React from 'react';
// import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Calculator from './components/Calculator';
import NavBar from './components/NavBar';
import Main from './screens/Main';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <NavBar />
        <Main />
      </>
    );
  }
}

export default App;
