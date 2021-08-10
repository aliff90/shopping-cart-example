import React, { useEffect, useState } from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart } from "../redux/product-action"

const ProductItem = (props) => {
    const [product, setProduct] = useState("")
    const id = useParams().id

    console.log(useParams())
    useEffect(() => {
        let items = []
        props.products.forEach((item) => {
            return item.id == id ? items = item : null
        })
        setProduct(items)
    },[])

    return ([
        <div>
            <Header />
            <div className="item-container">
                <div className="product-item" data-testid={`product-item-${product.id}`}>
                    <img src={product.image} alt={product.title}/>
                    <div className="product-description">
                        <h1 title="item-title" >{product.title}</h1>
                        <p>{product.description}</p>
                        <p className="price">{"$" + product.price}</p>
                        <button className="addToCart" onClick={() => props.addCart(product.id)}>Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    ])
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCart: (id) => dispatch(addCart(id))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductItem);