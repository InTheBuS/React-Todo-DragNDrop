import {combineReducers, createStore} from 'redux';
import {TodoReducer} from "./TodoListContainer";

const reducerBox = combineReducers({
    TodoReducer: TodoReducer
});
export const store = createStore(reducerBox);

window.store = store