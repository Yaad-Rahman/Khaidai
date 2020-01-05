import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './Homepage';
import UserOrder from './UserOrder';
import AdminPage from './AdminPage';


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
    <BrowserRouter>
    <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/orders" exact component={Order} />
        <Route path="/admin" exact component={Admin} />
    </div>
        
    </BrowserRouter>
)

export default App;