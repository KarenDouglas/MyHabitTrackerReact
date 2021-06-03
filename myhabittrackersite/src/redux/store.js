import {createStore, combineReducers,applyMiddleware} from 'redux';
import { InitialFeedback } from './todoForms';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import TodoReducers from "./TodoReducers"


 const store = createStore(TodoReducers, applyMiddleware(thunk))

 export default store;