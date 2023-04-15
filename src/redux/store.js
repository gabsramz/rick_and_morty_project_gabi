import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta línea es para conectar con la extensión del navegador >>> REDUX DEVTOOLS

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) // esta línea sirve para que podamos hacer peticiones a una Api/servidor
);

export default store;