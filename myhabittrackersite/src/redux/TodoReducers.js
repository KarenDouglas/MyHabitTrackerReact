import {ADD_TODO, ADD_TODOS, SET_TODO} from "../actions/actions"



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
        case SET_TODO:
            return { ...state, todos: action.payload}
        default:
            return state;
    }
}




