import {ADD_POINTS} from "../actions/points"



const initialState = {
   points: 0
}



export const PointReducer =  (state= initialState, action) =>{
    switch(action.type) {
        case ADD_POINTS:
            return { ...state, points: [...state.points, action.payload] };
        
        default:
            return state;
    }
}




