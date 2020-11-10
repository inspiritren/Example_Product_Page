import React, { Component } from 'react';
import { connect } from 'react-redux';
import TShirt from '../classic-tee.jpg';

class Cart extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            addedItems: this.props.addedItems
        };
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps.addedItems !== this.props.addedItems) {
            this.setState({addedItems: this.props.addedItems});
        }
    }

    render(){
        let tshirt = this.state.addedItems.map(item=>{
            return(
                <div className = "mini-cart">
                    <div className = "shirt-image">
                        <img src = {TShirt} style = {{width: "100%", height: "100%"}} alt = {item.title}/>
                    </div>
                    <div className = "shirt-description">
                        <p style = {{color: "#222222"}}>{item.title}</p>
                        <p style = {{color: "#222222"}}>{item.quantity} x <b>${item.price}.00</b></p>
                        <p style = {{color: "#222222"}}>Size:  <span className="size-text">{item.size}</span></p>
                    </div>
                </div>
            )
        });
        return(
            <div className = "tshirt-container">
                <div className = "tshirt-box">
                    {tshirt}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        addedItems: state.addedItems
    }
};

export default connect(mapStateToProps)(Cart);
