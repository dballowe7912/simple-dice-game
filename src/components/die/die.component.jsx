import React from 'react';
import './die.style.css';

class Die extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props)
        return (
            <div className='die'>
                <i className={`Die fas fa-dice-${this.props.face}`}></i>
            </div>
        )
    }
}

export default Die;