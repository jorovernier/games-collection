import React from 'react';
import './App.css';
import Calculator from './components/calculator';
import CardSelect from './components/cardSelect';
import Dice from './components/dice';
import TicTacToe from './components/tictactoe';
import Cats from './components/cats';
import CalcFunc from './functionals/calcFunc';
import Counter from './functionals/counter';

class App extends React.Component{
  render(){
    return (
      <main className='app-main'>

        <div className='calculator'>
          <Calculator></Calculator>
        </div>

        <div className='cards'>
          <CardSelect></CardSelect>
        </div>

        <div className='dice'>
          <Dice></Dice>
        </div>

        <div className='tictactoe'>
          <TicTacToe></TicTacToe>
        </div>

        <div className='cats'>
          <Cats></Cats>
        </div>

        <div className='calc-func'>
          <CalcFunc></CalcFunc>
        </div>

        <div className='counter'>
          <Counter></Counter>
        </div>

      </main>
    )
  }
}

export default App;
