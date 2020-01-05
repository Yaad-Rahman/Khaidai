import React from 'react';
import {TextField } from '@material-ui/core';

class Enquiry extends React.Component{
    render() {
        return(
            <div className="inquiry">
                <div className="contactDetails">
                    <h2>Atmc Corporation Restaurant</h2> <br /> <br/>
                    <p>Mohammadpur, Dhaka -1207. <br /> <br/><br/>
                    Human Interaction Expert <br />
                    Jonab Mongi Khondokar. </p>
                </div>
                <div className="inquiryForm">
                    <h2>ENQUIRY FORM</h2>
                    <p>If you have any complain or if you have any 
                        enquiry about our services, Please contact us by
                        completing the form below.
                    </p>
                    <form>
                        
                        <TextField
                        label="Your Name"
                        type="text"
                        variant="outlined"
                        />

                    </form>
                </div>
            </div>
        );
    }
}

export default Enquiry;