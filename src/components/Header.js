import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"

const Header = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let count = 0;
        props.cart.forEach((item) => {
            count += item.qty   
        })
        setCount(count)
    },[props.cart])

    return (
        <div className="header">
            <Link to={"/"}>
                <h1>Shopping Cart Eg</h1>
            </Link>
            <div>
            <Link to={"/cart"}>
                <button>Cart: {count}</button>
            </Link>
            </div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps)(Header);