import React from 'react';
import {TextField, Button} from '@material-ui/core';
import axios from 'axios';

const BASE_URL='';
class AdminNew extends React.Component {
    state={
        pName:'',
        pPrice:'',
        pStock: '',
        pCategory:'',
        image: null,
        isSubmitted: false
    }

    fileSelectedHandler = (event) => {
        this.setState({
            image: event.target.files[0]
        })
    }
    
    

    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
    
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        const fd= new FormData();
        fd.append('gg', this.state.image, this.state.image.name);
        axios.post('http://1659af7f.ngrok.io/Products', {
            pName: this.state.pName,
            pPrice: this.state.pPrice,
            pStock: this.state.pStock,
            pCategory: this.state.pCategory,
            image: fd
        })
        .then (res=> {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
        console.log(this.state);
        
    }

    render() {
        return(
            <div className="AdminNew">
                <form onSubmit={this.submitHandler}>
                    <h2>Add New Food!</h2>
                    <TextField
                    label='Food Name' 
                    name="foodName"
                    variant="outlined"
                    onChange={this.changeHandler}
                    value={this.state.pName.value}
                    /> <br /> <br/>
                    <TextField 
                    label='Price'
                    name="foodPrice"
                    variant='outlined'
                    type='number'
                    onChange={this.changeHandler}
                    /><br/> <br/>
                    <TextField 
                    label='stock'
                    name="stock"
                    variant='outlined'
                    type="number"
                    onChange={this.changeHandler}
                    /> <br /> <br/>
                    <TextField 
                    label='category'
                    name="stock"
                    variant='outlined'
                    type="number"
                    onChange={this.changeHandler}
                    /> <br /> <br/>
                    <label>Upload Image File</label><br/>
                    <input 
                    type='file'
                    onChange={this.fileSelectedHandler}
                    /> <br /> <br/>
                    <Button variant='contained'
                    color='primary'
                    type='submit'>
                        Upload
                    </Button>
                </form>
            </div>
        );
    }
}

export default AdminNew;