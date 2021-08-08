import React from "react";
import { connect } from "react-redux";
import Product from "./Product";
import Header from "./Header"

const ProductPage = (props) => {
    let index = 5
    return (
        <div>
            <Header />
            {/* <div data-testid="product"> */}
            {props.products.map((product, index) => {
                return (
                <div data-testid={`product-${product.id}`} >
                    <Product key={product.id} product={product} />
                </div>
                )
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductPage);