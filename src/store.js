import { createStore, combineReducers, applyMiddleware } from 'redux';
import { todos } from './reducers';

// local storage
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

// thunk
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducers = { todos };

// put reducers in a form that we can pass to the createStore function
const rootReducer = combineReducers(reducers);

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const configureStore = () => createStore(rootReducer);
export const configureStore = () =>
  createStore(
    persistedReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    composeWithDevTools(applyMiddleware(thunk))
  );
