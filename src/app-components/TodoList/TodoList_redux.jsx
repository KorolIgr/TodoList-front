import React from 'react';
import { connect } from 'react-redux'

import Button from '../../components/button/button';
import Input from '../../components/input/input';
import Checkbox from '../../components/checkbox/checkbox';


import { new_list, add_item, change_state, clear_completed } from '../../actions/Todo';

function Todo (props) {

    const newList = () => props.newPostList();
    const addItem = async (e)   =>  {
                                        e.preventDefault();
                                        props.addPostItem(e.target.elements.Task.value);
                                    }
    const changeState = (e, index) => props.changePostState(e, index);
    const clearCompleted = () => props.clearPostCompleted();

        return(
            <div>
                <div><Button text = {'Начать новый список'} handleClick = {newList}/></div>
                <div><Input handleClick = {addItem}/></div>
                {
                    props.tasks.map((task,index) =>
                                                    <Checkbox   
                                                                key={index}
                                                                Description = {task.description}
                                                                State = {task.state}
                                                                Index = {index} 
                                                                handleClick = {changeState}
                                                    />
                                    )
                }
                <div><Button text = {'Удалить выполненные'} handleClick = {clearCompleted}/></div>
            </div>
        )
    };

    const mapStateToProps = function(state) {
        return {
          tasks: state.todo
        }
      }

    const mapDispatchToProps = {
        newPostList: new_list,
        addPostItem: add_item,
        changePostState: change_state,
        clearPostCompleted: clear_completed
      }

export default connect(mapStateToProps, mapDispatchToProps)(Todo)