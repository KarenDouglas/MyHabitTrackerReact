import {ADD_TODO} from "../actions/actions"



const initialState = {
    todosInputText: "",
    completed: false
}



const TodoReducers =  (state= initialState, action) =>{
    switch(action.type) {
        case ADD_TODO:
            return { ...state, todosInputText: [...state.todosInputText ,action.payload]};

        case "REMOVE_TODO":
            return {todoList: action.payload};

        default:
            return state;
    }
}



export default TodoReducers;

