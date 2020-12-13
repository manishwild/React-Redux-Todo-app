// just some eg. how to use reducer

const initialState = {
    todos: [
        { id:0, text: 'React', completed: true },
        { id:1, text:'Redux', completed:false,color:'Purple' },
        { id:2, text: 'Trying to build something !', completed: false, color: 'blue'}
    ]
    // //filters: {
    //     status: 'All',
    //     colors: []
    // }
}
//using the initialState as a default value

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
}

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case value:
            
            break;
    
        default:
            return state
    }
}
export default function todosReducer(state = initialState, action) {
    //reducer normally looks at hte action type field to decide what happens
    switch (action.type) {
        // do something here based on the diffrent types of actions
        case todos/todoAdded: {
            // Can return just the new todos array - no extra object around it
            return [
              ...state,
                {
                  // Use an auto-incrementing numeric ID for this example
                  id: nextTodoId(state),
                  text: action.payload,
                  completed: false
                },
              
            ]
          }

          case 'todos/todoToggled': {
            return state.map((todo) => {
              if (todo.id !== action.payload) {
                return todo
              }
      
              return {
                ...todo,
                completed: !todo.completed,
              }
            })
          }

          case 'todos/colorSelected': {
            const { color, todoId } = action.payload
            return state.map((todo) => {
              if (todo.id !== todoId) {
                return todo
              }
      
              return {
                ...todo,
                color,
              }
            })
          }

          case 'todos/tpdoDeleted': {
              return state.filter((todo) => todo.id !== action.payload)
          }

          case 'todos/allCompleted': {
              return state.map((todo) => {
                  return {...todo,completed:true}
              })
          }

          case 'todos/completedCleared': {
              return state.filter((todo) => !todo.completed)
          }
        default:
           // If this reducer doesn't recognize the action type, or doesn't
      // care about this specific action, return the existing state unchanged
      return state
    }
}