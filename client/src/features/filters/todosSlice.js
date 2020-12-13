export default function todosReducer(state = initialState, action) {
    switch (action.type) {
      case 'todos/todoAdded': {
        // Can return just the new todos array - no extra object around it
        return [
          ...state,
          {
            id: nextTodoId(state),
            text: action.payload,
            completed: false
          }
        ]
      }
      case 'todos/todoToggled': {
        return state.map(todo => {
          if (todo.id !== action.payload) {
            return todo
          }
  
          return {
            ...todo,
            completed: !todo.completed
          }
        })
      }
      default:
        return state
    }
  }