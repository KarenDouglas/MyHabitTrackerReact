import * as ActionTypes from './ActionTypes';

export const Todo = (state = Todo, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
export const Todos = (state ={errMess: null, todos: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TODOS:
            return {...state, errMess: null, todos: action.payload};

        case ActionTypes.TODOS_FAILED:
            return {...state, errMess: action.payload};

        case ActionTypes.ADD_TODO:
            const todo = action.payload;
            todo.completed= false;
            return {...state, todos: state.todos.concat(todo)};
        default:
            return state;
    }
};