import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
            <Header />
            <Home />
        </div>
    </BrowserRouter>
      
    
  );
}

export default App;
