import React from 'react';
import '../css/cardSelect.css';

class CardSelect extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            suits: ['hearts', 'clubs', 'diamonds', 'spades'],
            cards: ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
            suit: '',
            card: ''
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
            card: ''
        })
    }

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
            <div className='card-body'>
                <div className='card'>
                    {this.state.suit 
                        ? <div className='card-front'>
                            <span className='top-left'>{this.state.card}{suit}</span>
                            <span className='symbols'>{amount}</span>
                            <span className='bottom-right'>{this.state.card}{suit}</span>
                          </div> 
                        : <div className='card-back'></div>
                    }</div>
                <div className='ran-cle'>
                    <button onClick={() => this.randomizer()}>Is this your card?</button>
                    <button onClick={() => this.clear()}>Clear</button>
                </div>
            </div>
        )
    }
}

export default CardSelect;