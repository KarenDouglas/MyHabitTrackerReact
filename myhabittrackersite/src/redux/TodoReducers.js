import {ADD_TODO, ADD_TODOS} from "../actions/actions"



const initialState = {
   todos:[]
}



export const TodoReducers =  (state= initialState, action) =>{
    switch(action.type) {
        case ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] };
        case ADD_TODOS:
            const todo = action.payload;

            return {...state, todos: state.todos.concat(todo)}; 
        default:
            return state;
    }
}




