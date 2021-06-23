import React from 'react';

class Dice extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            d2: '',
            d4: '',
            d6: '',
            d8: '',
            d10: '',
            d12: '',
            d20: ''
        }
        this.roll = this.roll.bind(this);
        this.clear = this.clear.bind(this);
    }

    roll(min, max){
        this.setState({
            ['d' + max]: Math.floor(Math.random() * (max - min) + min)
        });
    };

    clear(){
        this.setState({
            d2: '',
            d4: '',
            d6: '',
            d8: '',
            d10: '',
            d12: '',
            d20: ''
        })
    }

    render(){
        return(
            <div>
                <div className='d2'>
                    <p>{this.state.d2}</p>
                    <div>
                        <button onClick={() => this.roll(1, 2)}>Flip coin</button>
                    </div>
                </div>
                <div className='d4'>
                    <p>{this.state.d4}</p>
                    <div>
                        <button onClick={() => this.roll(1, 4)}>Roll d4</button>
                    </div>
                </div>
                <div className='d6'>
                    <p>{this.state.d6}</p>
                    <div>
                        <button onClick={() => this.roll(1, 6)}>Roll d6</button>
                    </div>
                </div>
                <div className='d8'>
                    <p>{this.state.d8}</p>
                    <div>
                        <button onClick={() => this.roll(1, 8)}>Roll d8</button>
                    </div>
                </div>
                <div className='d10'>
                    <p>{this.state.d10}</p>
                    <div>
                        <button onClick={() => this.roll(1, 10)}>Roll d10</button>
                    </div>
                </div>
                <div className='d12'>
                    <p>{this.state.d12}</p>
                    <div>
                        <button onClick={() => this.roll(1, 12)}>Roll d12</button>
                    </div>
                </div>
                <div className='d20'>
                    <p>{this.state.d20}</p>
                    <div>
                        <button onClick={() => this.roll(1, 20)}>Roll to hit!</button>
                    </div>
                </div>
                <button onClick={() => this.clear()}>Clear</button>
            </div>
        )
    }
}

export default Dice;