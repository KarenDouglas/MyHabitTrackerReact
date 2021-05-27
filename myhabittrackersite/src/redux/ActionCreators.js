import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';



export const addTodo = addTodo => ({
    type: ActionTypes.ADD_TODO,
    payload: addTodo
});



export const postTodo = (todoId, text) => dispatch =>{
    const newTodo = {
        todoId: todoId,
        text: text,
        
    };
    newTodo.date= new Date().toISOString();

    return fetch(baseUrl + 'todos', {
        method: "POST",
        body: JSON.stringify(newTodo),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => { throw error; }
    )
    .then(response => response.json())
    .then(response => dispatch(addTodo(response)))
    .catch(error => {
        console.log('post todo', error.message);
        alert('Your todo could not be posted\nError: ' + error.message);
    });
};



export const fetchTodos = () => dispatch => {    
    return fetch(baseUrl + 'todos')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                const error = new Error(`Error ${response.status}: ${response.statusText}`);
                error.response = response;
                throw error;
            }
        },
        error => {
            const errMess = new Error(error.message);
            throw errMess;
        }
        )
        .then(response => response.json())
        .then(todos => dispatch(addTodos(todos)))
        .catch(error => dispatch(todoFailed(error.message)));
};
export const todoFailed = errMess => ({
    type: ActionTypes.TODOS_FAILED,
    payload: errMess
});

export const addTodos = todos => ({
    type: ActionTypes.ADD_TODOS,
    payload: todos
});