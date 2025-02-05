import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(...middlewares)))

sagaMiddleware.run(rootSaga);

export default store