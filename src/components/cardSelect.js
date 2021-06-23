import React from 'react';

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
        return (
            <div>
                <div>{(this.state.card) + ' of ' + (this.state.suit)}</div>
                <div>
                    <button onClick={() => this.randomizer()}>Is this your card?</button>
                    <button onClick={() => this.clear()}>Clear</button>
                </div>
            </div>
        )
    }
}

export default CardSelect;