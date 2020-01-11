import React from 'react';
import {Paper, Switch,Snackbar,Button} from '@material-ui/core';
import {IconButton, CloseIcon} from '@material-ui/icons';
import Login from './Login';
import BasketOrder from './BasketOrder.js'
import {connect} from 'react-redux';
import axios from 'axios';
import history from '../../reducers/history';






class OrderTab extends React.Component {
  state={
    checkedA: true,
    oInstructions: '',
    isSubmitted: false
    }

  check = () => {
    if(this.state.checkedA) {
      return "call before arrive";
    }
    else {
      return "No Instructions";
    }
  }

   handleChange = name => event => {
    this.setState({ ...this.state, [name]: event.target.checked });
  };

  submitHandler = (e) => {
      e.preventDefault();

      this.props.cartItems.map(item =>
        axios.post('http://localhost:8080/orders/', {
          oInstructions: this.check(),
          oQuantity: item.count,
          oPrice: item.pPrice,
          oUserId: this.props.userId,
          oProductId: item.id
          })
          .then(res => {
              console.log("response",res);
              this.setState({isSubmitted: true});
              localStorage.clear();

          })
          .catch (err => {
              console.log(err);
          })




      )
    }

    historyFunc = () => {
      history.push('/');
    }


    render() {
      console.log("axios.Instructions", this.check());

      console.log("orders", this.state);
      console.log("cartItems", this.props.cartItems);
        return(
            <div>
                <Paper className="orderForm">
                <Login/>
                <h2 id="orderFormHeading">
                Hi, {this.props.userName}
                </h2>
                <BasketOrder />
                <Paper>
                <h2>Call before arrive ? </h2>
                <Switch
                checked={this.state.checkedA}
                onChange={this.handleChange('checkedA')}
                value="call before arrive"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                />

                </Paper>

                <button className="orderFormBtn"
                onClick={this.submitHandler}
                >
                Confirm Order
                </button>
                <button className="orderFormBtn">
                Cancel
                </button>

                </Paper>
                <Snackbar
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                open= {this.state.isSubmitted}
                autoHideDuration={4000}
                message="Your order placed successfully"
                action = {
                  <React.Fragment>
                  <Button color="secondary" size="small" onClick={this.historyFunc}>
                  Back to Homepage
                  </Button>
                  </React.Fragment>
                }
                />


            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    userName: state.auth.userName,
    userId: state.auth.userId,
    cartItems: state.cart.items
  }
}

export default connect(mapStateToProps)(OrderTab);
