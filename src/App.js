import React from 'react';
import './App.css';
import backgroundImage from "../src/images/background.png";
import Products from './components/Products';

const App = () => {




  return (
    <div className="App">
        <div className='Wrapper'>
            <img src={backgroundImage} alt="Something nice" className='backgroundImage' />
            <Products/>                
          </div>
    </div>
  );
}

export default App;

