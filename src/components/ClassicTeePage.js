import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from './actions/addProduct';

class ClassicTeePage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            size: "",
            title: "",
            price: 0
        }
    }
    
    handleAdd = (size, title, price)=> {
        this.props.addProduct(size, title, price);
    };

    handleSelection = (size, title, price)=> {
        this.setState(
            {
                size: size,
                title: title,
                price: price
            });
    };

    render(){
        let tshirt = this.props.items.map(item=>{
            return(
                <div className = "container">
                    <div className = "tshirt-image">
                        <img src = {item.img} style = {{width: "100%", height: "100%"}} alt = {item.title}/>
                    </div>
                    <div className = "tshirt-description">
                        <h4 className = "tshirt-title">{item.title}</h4>
                        <p className = "tshirt-price"><b>${item.price}.00</b></p>
                        <p className = "tshirt-info">{item.desc}</p>
                        <br></br>
                        <div className = "size-div">
                            <p className = "tshirt-size"><b>SIZE</b></p>
                            <p className = "tshirt-asterisk">*</p>
                            <p className = "tshirt-selected-size">{this.state.size}</p>
                        </div>
                        <button className = "size-button" onClick={() => this.handleSelection("S", item.title, item.price)}>S</button>
                        <button className = "medium-size-button size-button" onClick={() => this.handleSelection("M", item.title, item.price)}>M</button>
                        <button className = "size-button" onClick={() => this.handleSelection("L", item.title, item.price)}>L</button>
                        <br></br>
                        <button className = "add-to-cart-button" onClick={() => this.handleAdd(this.state.size, this.state.title, this.state.price)}><b>ADD TO CART</b></button>
                    </div>
                </div>
            )
        });

        return(
            <div className="tshirt-container">
                <div className="tshirt-box">
                    {tshirt}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.items
    }
};

const mapDispatchToProps= (dispatch)=>{
    return{
        addProduct: (size, title, price)=>{dispatch(addProduct(size, title, price))}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(ClassicTeePage);
