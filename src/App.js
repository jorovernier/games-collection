import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Calculator from './components/calculator';
import CardSelect from './components/cardSelect';
import Dice from './components/dice';

class App extends React.Component{
  render(){
    return (
      <div className='main'>
        <div className='calculator'>
          <Calculator></Calculator>
        </div>
        <div className='cards'>
          <CardSelect></CardSelect>
        </div>
        <div className='dice'>
          <Dice></Dice>
        </div>
      </div>
    )
  }
}

export default App;
