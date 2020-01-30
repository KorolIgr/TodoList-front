import React from 'react';
import './checkbox.scss'


class Checkbox extends React.Component{


    constructor(props){
        super(props);

        this.state = {Task: props.Task}
    }

    HandleChange = (e) => {

        const item = this.state.Task;

        item.State = e.target.checked;

        this.setState({
            Task: item
        });
    }


    render() {
        return (
            <div>
                <input type="checkbox"
                    defaultChecked = {false}
                    onClick = {this.HandleChange}
                    >
                </input>
                <span style= {{textDecorationLine: this.state.Task.State ? 'line-through': ''}} >{this.state.Task.Description}</span>
            </div>
        )
    }
}

export default Checkbox;

