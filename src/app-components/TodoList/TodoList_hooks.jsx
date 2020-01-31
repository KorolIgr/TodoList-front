import React, {useState} from 'react';
import './TodoList.scss'

import Button from '../../components/button/button';
import Input from '../../components/input/input'
import Checkbox from '../../components/checkbox/checkbox'

function TodoList() {
    const [tasks, updateTask] = useState([]);

    const new_list = (e) => {
        updateTask([]);
    }

    const add_item = async (e) => {
        e.preventDefault();
        const task= {Description: e.target.elements.Task.value , State: false};
        updateTask(oldArray => [...oldArray, task]);
    }

    const change_state = (e, index) => {
        let array = [...tasks];
        array[index].State = e.checked;
        updateTask(array);
    }

    const clear_completed = (e) => {
        updateTask(tasks.filter(task => !task.State));
    }

    return (
        <div>
        <div><Button text = {'Начать новый список'} handleClick = {new_list}/></div>
        <div><Input handleClick = {add_item}/></div>
        {
          tasks.map((task,index) =>
                                    <Checkbox   key={index}
                                                Description = {task.Description}
                                                State = {task.State}
                                                Index = {index} 
                                                handleClick = {change_state}
                                    />
                              )
        }
        <div><Button text = {'Удалить выполненные'} handleClick = {clear_completed}/></div>
      </div>
    );
}

export default TodoList