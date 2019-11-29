import React from 'react';
import {Paper} from '@material-ui/core';

const Menu = (props) => {
    console.log(props);
    return (
    <Paper className="menu">
        <h2>Juicy beef burger</h2>
        <img src="./burger.png" alt="food" />
        <p>Juicy beef burger with extra cheese that will delight your mouth. 
            Comes with french fries and sour sause.</p>
        <h1>$ 56.00</h1>
        <div className="orderbtn">Order now!</div>
    </Paper>
    );
}

export default Menu;
