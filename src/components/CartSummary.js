import React, { useEffect, useState } from "react";
import numeral from "numeral";

const CartSummary = (props) => {
    const [subTotalPrice, setSubTotalPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const formatTotalPrice = numeral(totalPrice).format("$0,0.00")
    const formatSubTotalPrice = numeral(subTotalPrice).format("$0,0.00");
    const delivery = 2.00
    const deliveryFormat = numeral(delivery).format("$0,0.00");
    
    useEffect(() => {
        let subTotal = 0
        props.cartItem.map((item) => {
            const totalEach = item.qty * item.price
            return subTotal += totalEach
        })
        setSubTotalPrice(subTotal)
    },[props.cartItem])

    useEffect(() => {
        let total = subTotalPrice + delivery;
        setTotalPrice(total)
    },[subTotalPrice])
    
    return (
        <div className="cart-summary">
            <div className="cart-summary__content">
                <div className="subtotal">
                    <h3>Subtotal</h3>
                    <span data-testid="subtotal">{formatSubTotalPrice}</span>
                </div>
                <div className="delivery">
                    <h3>Delivery</h3>
                    <span>{deliveryFormat}</span>
                </div>
                <div className="total">
                    <h3>Total</h3>
                    <span className="total__price" data-testid="total">{formatTotalPrice}</span>
                </div>
            </div>
        </div>
    )
}

export default CartSummary;