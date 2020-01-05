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
        pDescription: '',
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
        fd.append('pName', this.state.pName);
        fd.append('pPrice', this.state.pPrice);
        fd.append('pStock', this.state.pStock);
        fd.append('pCategory', this.state.pCategory);
        fd.append('pDescription', this.state.pDescription);
        fd.append('image', this.state.image, this.state.image.name);

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        axios.post('http://localhost:8080/Products/', fd, config)
        .then(res => {
            console.log(res);
        })
        .catch (err => {
            console.log(err);
        })
        console.log("fd",fd)
        console.log(this.state);



          }

    render() {
        return (
            <div className="AdminNew">
                <form onSubmit={this.submitHandler}>
                    <h2>Add New Food!</h2>
                    <TextField
                    label='Food Name'
                    name="pName"
                    variant="outlined"
                    onChange={this.changeHandler}
                    value={this.state.pName.value}
                    /> <br /> <br/>
                    <TextField
                    label='Description'
                    name="pDescription"
                    variant="outlined"
                    onChange={this.changeHandler}
                    value={this.state.pDescription.value}
                    /> <br /> <br/>
                    <TextField
                    label='Price'
                    name="pPrice"
                    variant='outlined'
                    type='number'
                    onChange={this.changeHandler}
                    value={this.state.pPrice.value}
                    /><br/> <br/>
                    <TextField
                    label='stock'
                    name="pStock"
                    variant='outlined'
                    type="number"
                    onChange={this.changeHandler}
                    value={this.state.pStock.value}
                    /> <br /> <br/>
                    <TextField
                    label='category'
                    name="pCategory"
                    variant='outlined'
                    type="number"
                    onChange={this.changeHandler}
                    value={this.state.pCategory.value}
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
