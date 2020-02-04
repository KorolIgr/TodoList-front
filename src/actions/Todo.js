export const new_list = () => ({
      type: 'NEW_LIST'
})

export const add_item = (description) => ({
      type: 'ADD_ITEM',
      description: description
})

export const change_state = (e, index) => ({
      type: 'CHANGE_STATE',
      index,
      e
})

export const clear_completed = () => ({
      type: 'CLEAR_COMPLETED'
})