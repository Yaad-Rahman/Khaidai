import React from 'react';
import HeaderTab from './HeaderTab';
import './homepage.css';
import MenuList from './MenuList';
import Contact from './Contact';
import Footer from './Footer';
import Enquiry from './Enquiry';
import Menu from './Menu';
import { connect } from 'react-redux';
import {fetchProducts} from '../../actions';


class Home extends React.Component {
    state={
        cartItems: []
    }
    componentDidMount() {
        this.props.fetchProducts();
        
    }

    renderList() {
        return this.props.products.map(p =>
            <Menu key={p.id} {...p} item={p} />)

    } 

    render() {
        console.log(this.props.products);
        return (
            <div>
                <HeaderTab />
                <div className="boyan">
                    <h2 id="boyanHeading" >Select the best menu for your delight!</h2>
                <MenuList />
                </div>
                <div className="menuItemList">
                      {this.renderList()}
                </div>                    
                <Contact />
                
                <Enquiry />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps =  (state) => {
    return { products: Object.values(state.products) };
};

export default connect(mapStateToProps, {fetchProducts}) (Home);