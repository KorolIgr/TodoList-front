import React from 'react';
import './App.css';

import Todo from './app-components/TodoList/TodoList_redux'

class App extends React.Component {
   
  render() {
    return (
      <div>
        <Todo />
      </div>
    );
  }
}

export default App;
