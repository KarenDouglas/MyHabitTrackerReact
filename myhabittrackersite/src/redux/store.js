import {createStore,applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {TodoReducers} from "./TodoReducers"


const reducer= combineReducers({
    todoReducer: TodoReducers
})

 const store = createStore(reducer, applyMiddleware(thunk))

 export default store;