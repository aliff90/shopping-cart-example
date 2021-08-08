import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addCart } from "../redux/product-action";
// import numeral from "numeral";

const Product = (props) => {
    return (
        <div>
            <Link to={`/item/${props.product.id}`}>
            <div className={props.product.id} data-testid="product">
                <img src={props.product.image} alt={props.product.title}/>
                <h1 title={props.product.title}>{props.product.title}</h1>
                <h1>{"$" + props.product.price}</h1>
                <h1>{props.product.description}</h1>
            </div>
            </Link>
            <button onClick={() => props.addCart(props.product.id)}>Add to cart</button>
        </div>
        
    )
};

const mapDispatchToProps = dispatch => {
    return {
        addCart: (id) => dispatch(addCart(id))
    }
}

export default connect(null, mapDispatchToProps)(Product);