import { ADD_REWARD , ADD_REWARDS} from "../actions/rewards"





const initialState = {
   rewards:[]
}



export const RewardReducers =  (state= initialState, action) =>{
    switch(action.type) {
        case ADD_REWARD:
            return { ...state, rewards: [...state.rewards, action.payload] };
        case ADD_REWARDS:
            const reward = action.payload;

            return {...state, rewards: state.rewards.concat(reward)};
        default:
            return state;
    }
}

