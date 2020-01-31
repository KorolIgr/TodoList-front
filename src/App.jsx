import React from 'react';
import './App.css';

import TodoList from './app-components/TodoList/TodoList_hooks'

class App extends React.Component {
   
  render() {
    return (
      <div>
        <TodoList />
      </div>
    );
  }
}

export default App;
