import React from 'react';
import '../css/cardSelect.css';

class CardSelect extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            suits: ['hearts', 'clubs', 'diamonds', 'spades'],
            cards: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
            suit: '',
            card: '',
            flipped: false
        }
        this.randomizer = this.randomizer.bind(this);
        this.clear = this.clear.bind(this);
    }

    randomizer(){
        this.setState({
            suit: this.state.suits[Math.floor(Math.random() * this.state.suits.length)], 
            card: this.state.cards[Math.floor(Math.random() * this.state.cards.length)]
        });
    };

    clear(){
        this.setState({
            suit: '',
            card: '',
            flipped: false
        });
    };

    render(){
        let suit;
        if (this.state.suit === 'hearts') {
            suit = <span style={{color:'red', fontSize: '20px'}}>&hearts;</span>
        } else if (this.state.suit === 'clubs') {
            suit = <span style={{fontSize: '20px'}}>&clubs;</span>
        } else if (this.state.suit === 'diamonds') {
            suit = <span style={{color:'red', fontSize: '20px'}}>&diams;</span>
        } else if (this.state.suit === 'spades') {
            suit = <span style={{fontSize: '20px'}}>&spades;</span>
        };

        let amount = [];
        for (var i = 0; i < this.state.card; i++) amount.push(<span key={i}>{suit}</span>);

        return (
            <main className='card-main'>

                <div className={`card ${this.state.flipped ? 'flipped' : ''}`}>
                    <div className='flipping-area'>

                        <div className='card-front'></div>

                        <div className='card-back'>

                            <div className='top-left'>
                                <span>{this.state.card}</span>
                                <span>{suit}</span>
                            </div>

                            <span className='symbols'>{amount}</span>

                            <div className='bottom-right'>
                                <span className={`${this.state.flipped ? 'fade' : 'bottom'}`}>{this.state.card}</span>
                                <span className={`${this.state.flipped ? 'fade' : 'bottom'}`}>{suit}</span>
                            </div>

                        </div> 
                    </div>
                </div>

                <div className='ran-cle'>
                    {this.state.suit 
                        ? <button onClick={() => this.clear()}>Clear</button> 
                        : <button onClick={() => {this.randomizer(); this.setState({flipped: !this.state.flipped})}}>Is this your card?</button>
                    }
                </div>

            </main>
        )
    }
}

export default CardSelect;