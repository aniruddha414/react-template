import {createStore, combineReducers,applyMiddleware} from 'redux';
import { createForms } from 'react-redux-form';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { Temp } from './temp';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            temp: Temp,
            ...createForms({
                feedback: null
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}
