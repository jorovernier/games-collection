import React from 'react';
import '../css/dice.css';

class Dice extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            d4: '',
            active4: false,
            d6: '',
            active6: false,
            d8: '',
            active8: false,
            d10: '',
            active10: false,
            d12: '',
            active12: false,
            d20: '',
            active20: false
        }
        this.roll = this.roll.bind(this);
        this.clear = this.clear.bind(this);
    }

    roll(min, max){
        var dieNum = max-1;
        this.setState({
            ['d' + dieNum]: Math.floor(Math.random() * (max - min) + min)
        });
    };

    clear(){
        this.setState({
            d4: '',
            d6: '',
            d8: '',
            d10: '',
            d12: '',
            d20: ''
        });
    };

    render(){
        return (
            <main className='dice-main'>

                {/* <div className='die'>
                    <div className={`d4 ${this.state.active4 ? `d4-show${this.state.d4}` : ''}`}>
                        <div className='d4-side d4-1'></div>
                        <div className='d4-side d4-4'></div>
                        <div className='d4-side d4-3'></div>
                        <div className='d4-side d4-2'></div>
                    </div>
                    <div>
                        <button onClick={() => {this.roll(1, 5); this.setState({active4: true}) ;}}>Roll d4</button>
                    </div>
                </div> */}

                <div className='die-cube'>
                    <div className={`d6 ${this.state.active6 ? `d6-show${this.state.d6}` : ''}`}>
                        <div className='d6-side d6-1'>1</div>
                        <div className='d6-side d6-6'>6</div>
                        <div className='d6-side d6-4'>4</div>
                        <div className='d6-side d6-3'>3</div>
                        <div className='d6-side d6-5'>5</div>
                        <div className='d6-side d6-2'>2</div>
                    </div>
                    <div>
                        <button onClick={() => {this.roll(1, 7); this.setState({active6: true}); }}>Roll d6</button>
                        <button className='die-clear' onClick={() => this.clear()}>Clear</button>
                    </div>
                </div>

                {/* <div className='die'>
                    <div className={`d8 ${this.state.active8 ? `d8-show${this.state.d8}` : ''}`}>

                    </div>
                    <div>
                        <button onClick={() => {this.roll(1, 9); this.setState({active8: true}); }}>Roll d8</button>
                    </div>
                </div> */}

                {/* <div className='die'>
                    <div className={`d10 ${this.state.active10 ? `d10-show${this.state.d10}` : ''}`}>

                    </div>
                    <div>
                        <button onClick={() => {this.roll(1, 11); this.setState({active10: true}) ;}}>Roll d10</button>
                    </div>
                </div> */}

                {/* <div className='die'>
                    <div className={`d12 ${this.state.active12 ? `d12-show${this.state.d12}` : ''}`}>

                    </div>
                    <div>
                        <button onClick={() => {this.roll(1, 13); this.setState({active12: true}) ;}}>Roll d12</button>
                    </div>
                </div> */}

                {/* <div className='die'>
                    <div className={`d20 ${this.state.active20 ? `d20-show${this.state.d20}` : ''}`}>

                    </div>
                    <div>
                        <button onClick={() => {this.roll(1, 21); this.setState({active20: true}) ;}}>Roll d20</button>
                    </div>
                </div> */}

                {/* <button className='die-clear' onClick={() => this.clear()}>Clear</button> */}

            </main>
        )
    }
}

export default Dice;