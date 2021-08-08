import React from "react";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import { connect } from "react-redux";

const Cart = (props) => {
    return (
        <div>
            { props.cart.length > 0 ? 
            <div>
                {props.cart.map((item) => {
                return <CartItem item={item} key={item.id} />
                })}
                <CartSummary cartItem={props.cart}/>
            </div> : 
            <h1>Shopping cart is empty</h1>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart);