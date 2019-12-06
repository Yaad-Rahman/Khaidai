import React from 'react';
import {Paper} from '@material-ui/core';
import {connect} from 'react-redux';

const Menu = ({id, title, description, img, price, item}) => {
    return (
    <Paper className="menu">
        <h2>{title}</h2>
        <img src="./burger.png" alt="food" />
        <p>{description}</p>
        <h1>{price}</h1>
        <div className="orderbtn"
        onClick={() => this.props.addToCart(item)}>Order now!</div>
    </Paper>
    );
}

const mapStateToProps = (state) => {
    return{
        items: state.products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (item) => {
            dispatch({
                type: 'ADD_TO_CART',
                item
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

