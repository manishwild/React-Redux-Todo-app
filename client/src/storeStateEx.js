import {createStore} from 'redux';
import rootReducer from './reducer';

let preloadedState 
const persistedTodoString = localStorage.getItem('todos')

if (persistedTodoString) {
    preloadedState = {
        todos: JSON.parse(persistedTodoString)
    }
}

const store = createStore(rootReducer, preloadedState)