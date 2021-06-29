import React from 'react';
import '../css/tictactoe.css';

class TicTacToe extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            player: 'X',
            grid1: '',
            grid2: '',
            grid3: '',
            grid4: '',
            grid5: '',
            grid6: '',
            grid7: '',
            grid8: '',
            grid9: '',
            row1: [],
            row2: [],
            row3: [],
            column1: [],
            column2: [],
            column3: [],
            diagonal1: [],
            diagonal2: []
        }
        this.setGrid = this.setGrid.bind(this);
        this.setPosition = this.setPosition.bind(this);
        this.winner = this.winner.bind(this);
        this.clear = this.clear.bind(this);
    }

    setGrid(grid){
        var newPlayer = '';
        if(this.state.player === 'X'){
            newPlayer = 'O'
        } else if (this.state.player === 'O'){
            newPlayer = 'X'
        };
        if(!this.state['grid'+grid]) {
            this.setState({
                ['grid'+grid]: this.state.player,
                player: newPlayer
            }, () => {this.winner()}
            );
        } else {
            alert('CHEATER')
        };
    };

    setPosition(state, player){
        this.setState({
            [state]: [...this.state[state], ...player]
        });
    };

    winner(){
        if(this.state.row1.length === 3 && this.state.row1.every(v => v === 'X')){
            alert('X wins!');
            this.clear();
        } else if(this.state.row1.length === 3 && this.state.row1.every(v => v === 'O')){
            alert('O wins!');
            this.clear();
        } else if(this.state.row2.length === 3 && this.state.row2.every(v => v === 'X')){
            alert('X wins!');
            this.clear();
        } else if(this.state.row2.length === 3 && this.state.row2.every(v => v === 'O')){
            alert('O wins!');
            this.clear();
        } else if(this.state.row3.length === 3 && this.state.row3.every(v => v === 'X')){
            alert('X wins!');
            this.clear();
        } else if(this.state.row3.length === 3 && this.state.row3.every(v => v === 'O')){
            alert('O wins!');
            this.clear();
        } else if(this.state.column1.length === 3 && this.state.column1.every(v => v === 'X')){
            alert('X wins!');
            this.clear();
        } else if(this.state.column1.length === 3 && this.state.column1.every(v => v === 'O')){
            alert('O wins!');
            this.clear();
        } else if(this.state.column2.length === 3 && this.state.column2.every(v => v === 'X')){
            alert('X wins!');
            this.clear();
        } else if(this.state.column2.length === 3 && this.state.column2.every(v => v === 'O')){
            alert('O wins!');
            this.clear();
        } else if(this.state.column3.length === 3 && this.state.column3.every(v => v === 'X')){
            alert('X wins!');
            this.clear();
        } else if(this.state.column3.length === 3 && this.state.column3.every(v => v === 'O')){
            alert('O wins!');
            this.clear();
        } else if(this.state.diagonal1.length === 3 && this.state.diagonal1.every(v => v === 'X')){
            alert('X wins!');
            this.clear();
        } else if(this.state.diagonal1.length === 3 && this.state.diagonal1.every(v => v === 'O')){
            alert('O wins!');
            this.clear();
        } else if(this.state.diagonal2.length === 3 && this.state.diagonal2.every(v => v === 'X')){
            alert('X wins!');
            this.clear();
        } else if(this.state.diagonal2.length === 3 && this.state.diagonal2.every(v => v === 'O')){
            alert('O wins!');
            this.clear();
        } else if(this.state.grid1 && this.state.grid2 && this.state.grid3 && this.state.grid4 && this.state.grid5 && this.state.grid6 && this.state.grid7 && this.state.grid8 && this.state.grid9){
            alert("It's a tie!");
            this.clear();
        };
    };

    clear(){
        this.setState({
            player: 'X',
            grid1: '',
            grid2: '',
            grid3: '',
            grid4: '',
            grid5: '',
            grid6: '',
            grid7: '',
            grid8: '',
            grid9: '',
            row1: [],
            row2: [],
            row3: [],
            column1: [],
            column2: [],
            column3: [],
            diagonal1: [],
            diagonal2: []
        });
    };

    render(){
        const {player} = this.state;

        return (
            <main className='ttt-main'>

                <div className='play-area'>
                    <p>It's {player}'s turn.</p>
                
                    <div className='grid'>
                        <div>
                            <button className='square' onClick={() => {this.setGrid(1); this.setPosition('row1', player); this.setPosition('column1', player); this.setPosition('diagonal1', player);}}>
                                {this.state.grid1}
                            </button>
                        </div>

                        <div>
                            <button className='square' onClick={() => {this.setGrid(2); this.setPosition('row1', player); this.setPosition('column2', player);}}>
                                {this.state.grid2}
                            </button>
                        </div>

                        <div>
                            <button className='square' onClick={() => {this.setGrid(3); this.setPosition('row1', player); this.setPosition('column3', player); this.setPosition('diagonal2', player);}}>
                                {this.state.grid3}
                            </button>
                        </div>

                        <div>
                            <button className='square' onClick={() => {this.setGrid(4); this.setPosition('row2', player); this.setPosition('column1', player);}}>
                                {this.state.grid4}
                            </button>
                        </div>

                        <div>
                            <button className='square' onClick={() => {this.setGrid(5); this.setPosition('row2', player); this.setPosition('column2', player); this.setPosition('diagonal1', player); this.setPosition('diagonal2', player);}}>
                                {this.state.grid5}
                            </button>
                        </div>

                        <div>
                            <button className='square' onClick={() => {this.setGrid(6); this.setPosition('row2', player); this.setPosition('column3', player);}}>
                                {this.state.grid6}
                            </button>
                        </div>

                        <div>
                            <button className='square' onClick={() => {this.setGrid(7); this.setPosition('row3', player); this.setPosition('column1', player); this.setPosition('diagonal2', player);}}>
                                {this.state.grid7}
                            </button>
                        </div>

                        <div>
                            <button className='square' onClick={() => {this.setGrid(8); this.setPosition('row3', player); this.setPosition('column2', player);}}>
                                {this.state.grid8}
                            </button>
                        </div>

                        <div>
                            <button className='square' onClick={() => {this.setGrid(9); this.setPosition('row3', player); this.setPosition('column3', player); this.setPosition('diagonal1', player);}}>
                                {this.state.grid9}
                            </button>
                        </div>

                    </div>
                </div>

                <button className='new-game' onClick={() => this.clear()}>New Game</button>
                
            </main>
        )
    }
}

export default TicTacToe;