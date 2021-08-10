import React from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { connect } from "react-redux";
import Header from "./Header";

const Cart = (props) => {
    return (
        <div>
            <Header />
            <h1 className="cart__title">Your Shopping Cart</h1>
            { props.cart.length > 0 ? 
            <div className="cart">
                <div className="cart-items">
                    {props.cart.map((item) => {
                    return <CartItem item={item} key={item.id} />
                })}
                </div>
                <CartSummary cartItem={props.cart}/>
            </div> : 
            <h1 className="cart-empty">Shopping cart is empty. <br/>Add item to your cart now!</h1>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);