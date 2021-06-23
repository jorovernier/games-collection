import React from 'react';
import '../css/calculator.css';

class Calculator extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            number1: '',
            number2: '',
            number3: '',
            method: ''
        }
        this.setMethod = this.setMethod.bind(this);
        this.setNumber = this.setNumber.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
        this.clear = this.clear.bind(this);
        this.equals = this.equals.bind(this);
    }
    setMethod(boop){
        this.setState({method: boop});
    };

    setNumber(num){
        if (!this.state.method) {
            if (!this.state.number1){
                this.setState({number1: num})
            } else if (this.state.number1){
                var bigNum1 = '';
                bigNum1 = bigNum1.concat(this.state.number1, num);
                this.setState({
                    number1: bigNum1
                })
            }
        } else if (this.state.method && this.state.number1){
            if (!this.state.number2){
                this.setState({number2: num})
            } else if (this.state.number2){
                var bigNum2 = '';
                bigNum2 = bigNum2.concat(this.state.number2, num);
                this.setState({
                    number2: bigNum2
                })
            }
        };
    };

    add(num1, num2){
        var num3 = num1 + num2;
        this.setState({number3: num3});
    };

    subtract(num1, num2){
        var num3 = num1 - num2;
        this.setState({number3: num3});
    };

    multiply(num1, num2){
        var num3 = num1 * num2;
        this.setState({number3: num3});
    };

    divide(num1, num2){
        var num3 = num1 / num2;
        this.setState({number3: num3});
    };

    clear(){
        this.setState({number1: '', number2: '',number3:'', method: ''});
    };

    equals(num1, num2, method){
        if (method === '+'){
            this.add(num1, num2)
        } else if (method === '-'){
            this.subtract(num1, num2)
        } else if (method === 'x'){
            this.multiply(num1, num2)
        } else if (method === '/'){
            this.divide(num1, num2)
        };
    };

    render(){
        return(
            <div className='body'>
                <div className='top-part'>
                    <div className='screen'>
                        <p className='display'>{this.state.number1 + this.state.method + this.state.number2 + (this.state.number3 ? ('=' + this.state.number3) : (''))}</p>
                    </div>
                    <button className='clear' onClick={() => this.clear()}>c</button>
                </div>
                <div className='keypad'>
                    <div className='numbers'>
                        <button className='num-butt' onClick={() => this.setNumber(1)}>1</button>
                        <button className='num-butt' onClick={() => this.setNumber(2)}>2</button>
                        <button className='num-butt' onClick={() => this.setNumber(3)}>3</button>
                        <button className='num-butt' onClick={() => this.setNumber(4)}>4</button>
                        <button className='num-butt' onClick={() => this.setNumber(5)}>5</button>
                        <button className='num-butt' onClick={() => this.setNumber(6)}>6</button>
                        <button className='num-butt' onClick={() => this.setNumber(7)}>7</button>
                        <button className='num-butt' onClick={() => this.setNumber(8)}>8</button>
                        <button className='num-butt' onClick={() => this.setNumber(9)}>9</button>
                        <button className='zero' onClick={() => this.setNumber(0)}>0</button>
                        <button className='equals' onClick={() => this.equals(this.state.number1, this.state.number2, this.state.method)}>=</button>
                    </div>
                    <div className='signs'>
                        <button className='sign-butt' onClick={() => this.setMethod('+')}>+</button>
                        <button className='sign-butt' onClick={() => this.setMethod('-')}>-</button>
                        <button className='sign-butt' onClick={() => this.setMethod('x')}>*</button>
                        <button className='sign-butt' onClick={() => this.setMethod('/')}>/</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;