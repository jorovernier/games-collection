import React from 'react';
import '../css/cats.css';
import db from '../cats.json';

class Cats extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            chosen1: []
        }
        this.choose = this.choose.bind(this);
    }

    choose(){
        this.setState({
            chosen1: db[Math.floor(Math.random() * db.length)]
        })
    }

    render(){
        return(
            <main className='cats-main'>
                <div className='top'>
                    <p>Choose your fighter.</p>
                    <button onClick={() => this.choose()}>Decide for me.</button>
                </div>
                <div className='chosen-one'>
                    <div className='one-name'>{this.state.chosen1.name}</div>
                    <p>{this.state.chosen1.bio}</p>
                    {this.state.chosen1 && <img className='one-img' alt='' src={`${this.state.chosen1.image}`}/>}
                </div>
            </main>
        )
    }
}

export default Cats