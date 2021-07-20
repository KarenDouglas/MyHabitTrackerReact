import {ADD_HABIT, ADD_HABITS, ADD_STREAK} from "../actions/habits"



const initialState = {
   habits:[],
}



export const HabitsReducers =  (state= initialState, action) =>{
    switch(action.type) {
        case ADD_HABIT:
            return { ...state, habits: [...state.habits, action.payload] };
        case ADD_HABITS:
            const habit = action.payload;

            return {...state, habits: state.habits.concat(habit)};
        case ADD_STREAK :
            return { ...state, streak: [state.habits.streak +1, action.payload]}
        default:
            return state;
    }
}




