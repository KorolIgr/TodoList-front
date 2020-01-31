import React from 'react';
import './button.scss'

class Button extends React.Component{

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        this.handleClick = this.props.handleClick.bind(this);
    }

    render() {
        return (

                <button className = "main" onClick = {({target}) => this.props.handleClick(target)}>
                    {this.props.text}
                </button>
        )
    }
}

export default Button;

