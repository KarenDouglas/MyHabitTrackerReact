import {createStore, combineReducers,applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form'
import { Todo } from "./todos";
import { InitialFeedback } from './todoForms';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            Todo: Todo,
            ...createForms({
                todoForm: InitialFeedback
            })   
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};