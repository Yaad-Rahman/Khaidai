import React from 'react';
import {Paper} from '@material-ui/core';
import Login from './Login';
import BasketOrder from './BasketOrder.js'
import {connect} from 'react-redux';




class OrderTab extends React.Component {


    render() {
        return(
            <div>
                <Paper className="orderForm">
                <Login/>
                <h2 id="orderFormHeading">
                Hi, {this.props.userName}
                </h2>
                <BasketOrder />

                <button className="orderFormBtn">
                Confirm Order
                </button>
                <button className="orderFormBtn">
                Cancel
                </button>

                </Paper>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    userName: state.auth.userName
  }
}

export default connect(mapStateToProps)(OrderTab);
