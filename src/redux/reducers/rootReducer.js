import { combineReducers } from 'redux';
import categoriesReducer from './categories';
import pictogramsReducer from './pictograms';
import UsersReducer from './users';
import patientsReducer from './patients';
import phrasesReducer from './phrases';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    pictograms: pictogramsReducer,
    users: UsersReducer,
    patients: patientsReducer,
    phrases: phrasesReducer
});

export default rootReducer;