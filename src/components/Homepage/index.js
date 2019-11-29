import React from 'react';
import HeaderTab from './HeaderTab';
import './homepage.css';
import MenuList from './MenuList';
import Contact from './Contact';
import Footer from './Footer';
import Enquiry from './Enquiry';
import Menu from './Menu';
import { Grid } from '@material-ui/core';


class Home extends React.Component {
    render() {
        return (
            <div>
                <HeaderTab />
                <img src="foodBackground.jpg" width="100%" height="716px" id="foodImg"/>
                <img src="Rectangle.png" width="100%" id="brownBackground" />
                <div className="boyan">Select the best menu for your delight!</div>
                <MenuList />
                <Grid container
                alignContent='center'
                justify='center'
                zeroMinWidth
                className="menuItemList" spacing={2}>
                    <Grid item xs={4}>
                    <Menu
                name="baal"
                pic="chat" />
                    </Grid>
                    <Grid item xs={4}>
                    <Menu
                name="baal"
                pic="chat" />
                    </Grid>
                    <Grid item xs={4}>
                    <Menu
                name="baal"
                pic="chat" />
                    </Grid>
                </Grid>
                
    
                <Contact />
                <Enquiry />
                <Footer />
            </div>
        );
    }
}

export default Home;