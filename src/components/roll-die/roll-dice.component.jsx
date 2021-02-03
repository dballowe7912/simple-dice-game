import React from 'react';
import Die from '../die/die.component';
import './roll-dice.style.css'

class RollDice extends React.Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    };

    constructor(props) {
        super(props);

        this.state = {
            die1: 'one',
            die2: 'one'
        }        
        this.roll = this.roll.bind(this);
    }

    roll() {
        const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        this.setState({ die1: newDie1, die2: newDie2 });
    }

    render() {
        return (
            <div>
                <div className='roll-dice'>
                    <Die face={this.state.die1}/>
                    <Die face={this.state.die2}/>
                </div>
                <button onClick={this.roll}>Roll Die</button>
            </div>
        )
    }
}

export default RollDice;