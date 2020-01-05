import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
const initialState = {};
if (localStorage.getItem('cartItems')){
    initialState.cart = {
        items: JSON.parse(localStorage.getItem('cartItems'))
    }
}


const store=createStore(
    reducers, initialState,
    composeWithDevTools(applyMiddleware(reduxThunk))
);


ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>, document.querySelector('#root'));