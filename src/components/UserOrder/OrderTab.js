import React from 'react';
import {Paper, Typography, TextField, Button} from '@material-ui/core';
import axios from 'axios';
import Login from './Login';


const BASE_URL = '';

class OrderTab extends React.Component {


state= {
    userName : '',
    userEmail: '',
    userPassword: '',
    confirmPassword: '',
    userNumber: '',
    userAddress: '',
    isSubmited: false,
    nameError: '',
    nameErrorT: false,
    passwordError: '',
    passwordErrorT: false,
    numberError: '',
    numberErrorT: ''

    
}

changeHandler = (e) => {
    this.setState({
        [e.target.name] : e.target.value

    })

}



validate= () => {
    let nameError = "";
    let passwordError="";
    let numberError= ""; 

    if(!this.state.userName) {
        nameError= "name cannot be blank";
    }

    if(this.state.userPassword !== this.state.confirmPassword) {
        passwordError="Passwords didn't match";
    }

    if(this.state.userNumber.length < 11) {
        numberError="Not a valid Mobile Number";
    }

    if(nameError) {
        this.setState({
            nameError,
            nameErrorT: true
        });
        return false;
    }

    if(passwordError) {
        this.setState({
            passwordError,
            passwordErrorT: true
        });
        return false;
    }


    if( numberError) {
        this.setState({
            numberError,
            numberErrorT: true
        });
        return false;
    }
    
    return true;
};

submitHandler=(e) => {
    console.log(this.state.userName);
    console.log(this.state.nameErrorT);
    console.log(this.validate());

    e.preventDefault();
    const isValid= this.validate();
    if (isValid){
    console.log(this.state);
}
    axios.post(`${BASE_URL}`, {
     userName: this.state.userName,
     userEmail: this.state.userEmail,
     userPassword: this.state.userPassword,
     userNumber: this.state.userNumber,
     userAddress: this.state.userAddress   
    })
    .then(res => {
        this.setState({
            isSubmited: true
        })
    })
    .catch()

}


    render() {
        return(
            <div>
                <Paper className="orderForm">
                    <Paper>
                        <h2>Your Order</h2>
                    </Paper>
                    <Typography varient='h3' align='center'>
                        Client Information
                    </Typography>
                    <Typography varient='h6' align='center'>
                        Please fill up the form to carry out your favourite food
                        right front of your door.
                    </Typography>
                    <form onSubmit={ this.submitHandler}>
                        <Typography align='center'>
                        <TextField
                        error={this.state.nameErrorT}
                        helperText={this.state.nameError}
                        onChange={this.changeHandler}
                        value={this.state.userName}
                        name="userName"
                        label="Your Name"
                        variant="outlined" /> <br/> <br/>

                        <TextField
                        onChange={this.changeHandler}
                        value={this.state.userEmail}
                        name="userEmail"
                        label="Your Email"
                        variant="outlined"
                        type='email' /> <br/> <br/>

                        <TextField
                        required
                        onChange={this.changeHandler}
                        value={this.state.userPassword}
                        name="userPassword"
                        label="Give a Password"
                        variant="outlined"
                        type="password" /> <br/> <br/>

                        
                        <TextField
                        required
                        error={this.state.passwordErrorT}
                        helperText={this.state.passwordError}
                        onChange={this.changeHandler}
                        value={this.state.confirmPassword}
                        name="confirmPassword"
                        label="Confirm Password"
                        variant="outlined"
                        type="password" /> <br/> <br/>

                        <TextField
                        error={this.state.numberErrorT}
                        helperText={this.state.numberError}
                        onChange={this.changeHandler}
                        value={this.state.userNumber}
                        name="userNumber"
                        label="Your Contact Number"
                        variant="outlined"
                        type="number" /> <br/> <br/>

                        <TextField
                        onChange={this.changeHandler}
                        value={this.state.userAddress} 
                        name="userAddress"
                        label="Delivery Address"
                        variant="outlined"
                        multiline
                        rowsMax="2"/><br/> <br />

                        <p>Already a member ? <Login/></p> <br/> 
                        <Button variant='contained' type='submit' style={{margin: "20px"}}>Order</Button>
                        {this.state.isSubmited ? <p>GG done</p> : <p>failed</p>}
                        </Typography>

                        
                    </form>
                    
                </Paper>

            </div>
        );
    }
}

export default OrderTab;