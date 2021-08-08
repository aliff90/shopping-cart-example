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
        <div>
            <h1>Subtotal</h1>
            <span data-testid="subtotal">{formatSubTotalPrice}</span>
            <h1>Delivery</h1>
            <span>{deliveryFormat}</span>
            <h1>Total</h1>
            <span data-testId="total">{formatTotalPrice}</span>
        </div>
    )
}

export default CartSummary;