import {combineReducers} from 'redux';
import {cheeseReducer} from './cheese';

export const rootReducer = combineReducers({cheese: cheeseReducer});
