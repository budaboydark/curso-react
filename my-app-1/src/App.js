import React from 'react';
import logo from './logo.svg';
import './App.css';
import Teste from './Teste';
import Product from './Product';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          TESTE APP REACT Product
        </p>
        <Teste></Teste>
        <Product id="60"></Product>
      </header>
    </div>
  );
}

export default App;
