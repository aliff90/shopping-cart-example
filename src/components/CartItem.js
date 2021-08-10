import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../redux/product-action";
import numeral from "numeral";

const CartItem = (props) => {
    const [totalItemPrice, setTotalItemPrice] = useState(0);
    const formatTotalItemPrice = numeral(totalItemPrice).format("$0,0.00")
    
    useEffect(() => {
        const totalPrice = props.item.qty * props.item.price;
        setTotalItemPrice(totalPrice)
    },[props.item.qty])
    

    return (
        <div>
            <div className="cart-item">
                <button className="remove" onClick={() => props.removeItem(props.item.id)}>X</button>
                <img src={props.item.image} alt={props.item.name} />
                <div className="cart-item__container">
                    <div className="cart-item__text">
                        <h2 title={props.item.title}>{props.item.title}</h2>
                        <p>{"$" + props.item.price}</p>
                    </div>
                    <div className="cart-item__buttons">
                        <button  className="btn-qty" onClick={props.item.qty === 1 ? () => props.removeItem(props.item.id) : () => props.decreaseQty(props.item.id)}>-</button>
                        <span title="qty">{props.item.qty}</span>
                        <button className="btn-qty" onClick={() => props.increaseQty(props.item.id)}>+</button>
                    </div>
                    <span className="cart-item__item-qty">{formatTotalItemPrice}</span>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        increaseQty: (id) => dispatch(increaseQty(id)),
        decreaseQty: (id) => dispatch(decreaseQty(id)),
        removeItem: (id) => dispatch(removeItem(id))
    }
}

export default connect(null, mapDispatchToProps)(CartItem);

