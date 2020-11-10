import React, { Component } from 'react';
import {connect} from "react-redux";
import {Dropdown} from "semantic-ui-react";
import Cart from "./Cart";


class TopNav extends Component{
    render() {
        return (
            <nav className = "top-nav">
                <ul className = "cart-quantity">
                    <Dropdown style = {{color: '#888888'}} icon={null} text = {"My Cart ( " + this.props.subTotal + " )"}>
                        <Dropdown.Menu className = "dropdown-menu">
                            <Cart/>
                        </Dropdown.Menu>
                    </Dropdown>
                </ul>
            </nav>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        subTotal: state.subTotal
    }
};

export default connect(mapStateToProps)(TopNav);
