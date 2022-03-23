import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';

const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
