import { createStore, combineReducers } from 'redux';
import { todos } from './reducers';

const reducers = { todos };

// put reducers in a form that we can pass to the createStore function
const rootReducer = combineReducers(reducers);

export const configureStore = () => createStore(rootReducer);
