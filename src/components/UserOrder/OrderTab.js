import React from 'react';
import {Paper, Typography, TextField, Button} from '@material-ui/core';
import axios from 'axios';
import Login from './Login';
import BasketOrder from './BasketOrder.js'


const BASE_URL = 'http://localhost:8080/users/';

class OrderTab extends React.Component {


state= {
    uName : '',
    uEmail: '',
    uPassword: '',
    confirmPassword: '',
    uPhoneNo: '',
    uAddress: '',
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

    if(!this.state.uName) {
        nameError= "name cannot be blank";
    }

    if(this.state.uPassword !== this.state.confirmPassword) {
        passwordError="Passwords didn't match";
    }

    if(this.state.uPhoneNo.length < 11) {
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
    console.log(this.state.uName);
    console.log(this.state.nameErrorT);
    console.log(this.validate());

    e.preventDefault();
    const isValid= this.validate();
    if (isValid){
    console.log(this.state);
}
    axios.post(`${BASE_URL}`, {
     uName: this.state.uName,
     uEmail: this.state.uEmail,
     uPassword: this.state.uPassword,
     uPhoneNo: this.state.uPhoneNo,
     uAddress: this.state.uAddress   
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
                    <Typography varient='h3' align='center' id="signUpHeading">
                        SIGN UP
                        <Login/>
                    </Typography>
                    
                    
                </Paper>

            </div>
        );
    }
}

export default OrderTab;