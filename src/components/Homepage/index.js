import React from 'react';
import HeaderTab from './HeaderTab';
import './homepage.css';
import Contact from './Contact';
import Footer from './Footer';
import Enquiry from './Enquiry';
import Menu from './Menu';
import { connect } from 'react-redux';
import {fetchProducts, fetchProducts1, fetchProducts2, fetchProducts3} from '../../actions';
import Basket from './Basket';



class Home extends React.Component {
    state={
        trigger: true,
        trigger1: false,
        trigger2: false,
        trigger3: false,
        class: "gg",
        class1: "gg",
        class2: "gg",
        class3: "gg"
    }
    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchProducts1();
        this.props.fetchProducts2();
        this.props.fetchProducts3();

    }

    componentWillMount() {
        if(localStorage.getItem('cartItems')){
            this.setState({
                cartItems: JSON.parse(localStorage.getItem('cartItems'))
            });
        }
    }

    renderList() {
        if(this.state.trigger){
        return this.props.products.map(p =>
            <Menu key={p.id} {...p} product={p} />)
        }
        if(this.state.trigger1){
            return this.props.lunch.map(p =>
                <Menu key={p.id} {...p} product={p} />)
            }
        if(this.state.trigger2){
        return this.props.dinner.map(p =>
            <Menu key={p.id} {...p} product={p} />)
        }
        if(this.state.trigger3){
            return this.props.beverage.map(p =>
                <Menu key={p.id} {...p} product={p} />)
            }
        return null;

    }

    toggle=() => {
        this.setState({
            trigger: true,
        trigger1: false,
        trigger2: false,
        trigger3: false,
        class: "MenuSelected",
        class3: "gg",
        class1: "gg",
        class2: "gg",


        })
    }

    toggle1=() => {
        this.setState({
            trigger: false,
        trigger1: true,
        trigger2: false,
        trigger3: false,
        class: "gg",
        class1: "MenuSelected",
        class2: "gg",
        class3: "gg"

        })
    }

    toggle2=() => {
        this.setState({
            trigger: false,
        trigger1: false,
        trigger2: true,
        trigger3: false,
        class1: "gg",
        class2: "MenuSelected",
        class: "gg",
        class3: "gg"

        })
    }

    toggle3=() => {
        this.setState({
            trigger: false,
        trigger1: false,
        trigger2: false,
        trigger3: true,
        class2: "gg",
        class3: "MenuSelected",
        class: "gg",
        class1: "gg"

        })
    }





    render() {
        console.log("props chod",this.props);
        return (
            <div>
                <HeaderTab />
                <div className="boyan">
                    <h2 id="boyanHeading" >Select the best menu for your delight!</h2>



                <div className="MenuList" id="MenuList">
                <div id="margin">
                    <img src="fastFood.png" alt="breakfast" onClick={this.toggle} className={this.state.class}/>
                    <h2>Breakfast</h2>
                </div>
                <div id="margin">
                    <img src="dinner.png" alt="lunch" onClick={this.toggle1} className={this.state.class1} />
                    <h2>Lunch</h2>
                </div>
                <div id="margin">
                    <img src="dinner.png" alt="dinner" onClick={this.toggle2} className={this.state.class2} />
                    <h2>Dinner</h2>
                </div>
                <div>
                    <img src="beverage.png" alt="beverage" onClick={this.toggle3} className={this.state.class3} />
                    <h2>beverage</h2>
                </div>
            </div>


                </div>
                <div className="menuItemList">
                      {this.renderList()}
                </div>
                <Contact />
                <Basket />
                <Enquiry />
                <Footer />
            </div>
        );
    }
}

const mapStateToProps =  (state) => {
    return {
        products: Object.values(state.products),
        lunch: Object.values(state.lunch),
        dinner: Object.values(state.dinner),
        beverage: Object.values(state.beverage),
    };
};

export default connect(mapStateToProps, {fetchProducts,fetchProducts1,fetchProducts2,fetchProducts3}) (Home);
