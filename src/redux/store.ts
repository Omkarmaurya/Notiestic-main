import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import combineReducer  from './reducers/combineReducer'
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);
export {
    store
}