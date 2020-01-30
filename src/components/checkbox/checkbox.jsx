import React from 'react';
import './checkbox.scss'


class Checkbox extends React.Component{


    render() {
        return (
            <div>
                <input  type = "checkbox"
                        checked = {this.props.State}
                        onChange = {({target}) => this.props.handleClick(target, this.props.Index)}
                    >
                </input>
                <span style= {{textDecorationLine: this.props.State ? 'line-through': ''}} >{this.props.Description}</span>
            </div>
        )
    }
}

export default Checkbox;

