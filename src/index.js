import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import { compose } from '@material-ui/system';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
    reducers,
    composeEnhancers(applyMiddleware())
    );


ReactDOM.render(
<Provider store={store}>
<App/>
</Provider>, document.querySelector('#root'));