import React from 'react';
import {connect} from 'react-redux';
import {removeFromCart} from '../../actions/cartActions';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Link} from 'react-router-dom';


class Basket extends React.Component {
    state={
        clicked: true
    }

    handleClick =() => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        const {cartItems} = this.props;
        return(
            <div className="basket">
                <ShoppingBasketIcon style={{fontSize: 70, color: '#FCFACE'}} className="basketIcon" onClick={this.handleClick} />
                <div id="basketItemNum">{cartItems.length}</div>
                {!this.state.clicked &&
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Item</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Quantity</TableCell>
                                <TableCell>Total Price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cartItems.map(item =>
                                <TableRow>
                                    <TableCell>{item.pName}</TableCell>
                                    <TableCell align="right">{item.pPrice}</TableCell>
                                    <TableCell align="right">{item.count}</TableCell>
                                    <TableCell align="right">{item.pPrice * item.count}</TableCell>
                                    <TableCell align="right">
                                        <button className="removeItem" onClick={() => this.props.removeFromCart(this.props.cartItems, item)}>
                                            X
                                        </button>
                                        </TableCell>
                                </TableRow>
                                )}
                                <TableRow>
                                    <TableCell rowSpan={3} />
                                    <TableCell colSpan={2}>Total</TableCell>
                                    <TableCell align="right">{cartItems.reduce((a,c) => a + c.pPrice*c.count, 0)}</TableCell>
                                    <TableCell align="right"><Link to="/orders" id="checkInBtn">Check In</Link></TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>

                </Paper>

    }


            </div>
        )
    }
}

const mapStateToProps = state => ({
    cartItems: state.cart.items
})

export default connect(mapStateToProps, {removeFromCart})(Basket);
