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

        const tasks = [];

        this.setState({
            tasks: tasks,
        });
    }

    add_item = async (e) => {
        e.preventDefault();

        const array = this.state.tasks.slice(0);
        const task= {Description: e.target.elements.Task.value , State: false};
        

        array.push(task);

        this.setState({
            tasks: array,
        });
    
    }

    
    clear_completed = () => {

        const array = this.state.tasks.slice(0);
        const result = [];

        var i;
        for (i = 0; i<array.length; i++) {

          if(!array[i].State)
          {
            result.push(array[i]);
          }
        }
        
        this.setState({
          tasks: result,
        });

      }
      
      

  render(){
        
    return (

      <div>
        <div><Button text = {'Начать новый список'} handleClick = {this.new_list}/></div>
        <div><Input onSubmit = {this.add_item}/></div>
        {
          this.state.tasks.map((task,index) =>
                                                <Checkbox key={index} 
                                                Task={task} 
                                                />
                              )
        }
        <div><Button text = {'Удалить выполненные'} handleClick = {this.clear_completed}/></div>
      </div>
      
    );
  }
}

export default TodoList;