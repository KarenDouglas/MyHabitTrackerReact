import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const postTodos = (todosInputText) => dispatch => {
    
    const newTodo = {
        todosInputText, 
    };
    newTodo.date = new Date().toISOString();

    return fetch(baseUrl + 'todos', {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
            "Content-Type": "application/json"
        }
    })
    
    .then(response => response.json())
    .then(response => dispatch(postTodos(response)));
    
};