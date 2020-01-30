import React from 'react';
import './input.scss'


const Input = (props) =>{
    return (
        <form onSubmit={props.handleClick}>
            <input className = "main" type = "text" name="Task" placeholder="Задание" />
            <button className = "main">Enter</button>
        </form>
    )
}

export default Input;