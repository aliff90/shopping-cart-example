import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addCart } from "../redux/product-action";
// import numeral from "numeral";

const Product = (props) => {
    return (
        <div className="product">
            <Link to={`/item/${props.product.id}`}>
            <div className="productItem" data-testid="product">
                <img src={props.product.image} alt={props.product.title}/>
                <h2 title={props.product.title}>{props.product.title}</h2>
                <p>{props.product.description}</p>
                <p className="price">{"$" + props.product.price}</p>
            </div>
            </Link>
            <button className="addToCart" onClick={() => props.addCart(props.product.id)}>Add to cart</button>
        </div>
        
    )
};

const mapDispatchToProps = dispatch => {
    return {
        addCart: (id) => dispatch(addCart(id))
    }
}

export default connect(null, mapDispatchToProps)(Product);