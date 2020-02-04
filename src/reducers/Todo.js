const Todo = (state = [], action) => {
    switch (action.type) {
  
        case 'NEW_LIST':
            return []
  
        case 'ADD_ITEM':
            return[...state, {description: action.description, state: false }]

        case 'CHANGE_STATE':
            let array = [...state];
            array[action.index].state = action.e.checked;
            return array

        case 'CLEAR_COMPLETED':
            return state.filter(task => !task.state)

      default:
            return state;
    }
  }

  export default Todo