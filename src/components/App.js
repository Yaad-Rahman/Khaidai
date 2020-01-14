import React from 'react';
import {Router, Route} from 'react-router-dom';
import Home from './Homepage';
import UserOrder from './UserOrder';
import AdminPage from './AdminPage';
import history from '../reducers/history';


const HomePage = () => (
    <Home />
)

const Order = () => (
    <UserOrder/>
)

const Admin=() => (
    <AdminPage />
)


const App = () => (
    <Router forceRefresh={true} history={history}>
    <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/orders" exact component={Order} />
        <Route path="/admin" exact component={Admin} />
    </div>

    </Router>
)

export default App;
