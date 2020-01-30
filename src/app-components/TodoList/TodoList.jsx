import React from 'react';
import './TodoList.scss'

import Button from '../../components/button/button';
import Input from '../../components/input/input'
import Checkbox from '../../components/checkbox/checkbox'

class TodoList extends React.Component{

    DescriptionTask = ""

    constructor(props) {
        super(props);
        this.state = {tasks: []};
      }


    new_list = () => {

        this.setState({tasks: []});
    }

    add_item = async (e) => {
        e.preventDefault();

        const array = this.state.tasks.slice(0);
        const task= {Description: e.target.elements.Task.value , State: false};
        
        array.push(task);

        this.setState({tasks: array});
    
    }

    
    change_state = (e, index) => {

      const array = this.state.tasks.slice(0);
      array[index].State = e.checked;

      this.setState({tasks: array});

    }

    clear_completed = () => {
      this.setState({tasks: this.state.tasks.filter(function(task) {return !task.State})});
    }
      
      

  render(){
        
    return (

      <div>
        <div><Button text = {'Начать новый список'} handleClick = {this.new_list}/></div>
        <div><Input handleClick = {this.add_item}/></div>
        {
          this.state.tasks.map((task,index) =>
                                                <Checkbox key={index}
                                                          Description = {task.Description}
                                                          State = {task.State}
                                                          Index = {index} 
                                                          handleClick = {this.change_state}
                                                />
                              )
        }
        <div><Button text = {'Удалить выполненные'} handleClick = {this.clear_completed}/></div>
      </div>
      
    );
  }
}

export default TodoList;