import React from 'react';
import {TextField, Button, Typography} from '@material-ui/core';

class AdminNew extends React.Component {
    render() {
        return(
            <div className="AdminNew">
                <form>
                    <h2>Add New Food!</h2>
                    <TextField
                    label='Food Name' 
                    name="foodName"
                    variant="outlined"
                    /> <br /> <br/>
                    <TextField 
                    label='Price'
                    name="foodPrice"
                    variant='outlined'
                    type='number'/><br/> <br/>
                    <TextField 
                    label='Food Description'
                    name="description"
                    variant='outlined'
                    /> <br /> <br/>
                    <TextField 
                    name="foodImg"
                    variant='outlined'
                    type="file"
                    helperText='Upload Food Image'
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