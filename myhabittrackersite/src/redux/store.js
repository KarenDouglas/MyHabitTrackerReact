import {createStore,applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { HabitsReducers } from './HabitsReducer';
import {TodoReducers} from "./TodoReducers";
import {RewardReducers} from './rewardReducer';
import {PointReducer} from "./pointReducer";
import { composeWithDevTools } from 'redux-devtools-extension';





const reducer= combineReducers({
    todoReducer: TodoReducers,
    habitReducer: HabitsReducers,
    RewardReducers: RewardReducers,
    PointReducer: PointReducer

})

 const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

 export default store;