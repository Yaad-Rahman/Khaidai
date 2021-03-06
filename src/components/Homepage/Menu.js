import React from 'react';
import {Paper} from '@material-ui/core';
import {addToCart} from '../../actions/cartActions';
import {connect} from 'react-redux';



  class Menu extends React.Component {
    state={
      trigger: false
    }

      render(){
        let source=`http://0.0.0.0:8000${this.props.product.pImg}`
        console.log("source", source);
        console.log("products",this.props);
    return (
    <Paper className="menu">
        <h2>{this.props.product.pName} </h2>
        <img src={source} alt="food" id="menuImg" />
        <p>{this.props.product.pDescription}</p>
        <h1>${this.props.product.pPrice}</h1>
        <div className="orderbtn"
        onClick={(e)=> {this.props.addToCart(this.props.cartItems, this.props.product); alert("Item added to cart")}}
        >Order now!</div>
    </Paper>
    );
}}

const mapStateToProps = state => ({
  cartItems: state.cart.items
})

export default connect(mapStateToProps, {addToCart})(Menu);
