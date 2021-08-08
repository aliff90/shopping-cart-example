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
            {/* {props.item.qty > 0 ?  */}
                <div>
                <img src={props.item.image} alt={props.item.name} />
                <h1 title={props.item.title}>{props.item.title}</h1>
                <div>
                    <button onClick={props.item.qty === 1 ? () => props.removeItem(props.item.id) : () => props.decreaseQty(props.item.id)}>-</button>
                    <span title="qty">{props.item.qty}</span>
                    <button onClick={() => props.increaseQty(props.item.id)}>+</button>
                    <button onClick={() => props.removeItem(props.item.id)}>remove</button>
                </div>
                <div>
                    <span>{formatTotalItemPrice}</span>
                </div>
            </div>
            {/* :
            null
            } */}
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

