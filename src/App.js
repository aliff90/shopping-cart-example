import React from "react";
import ProductPage from "./components/ProductPage";
import ProductItem from "./components/ProductItem";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/styles.scss"
import { Provider } from "react-redux"
import store from "./redux/store"
import Cart from "./components/Cart"

const App = () => {
    return (
        <Provider store={store}>
            <Router>
            <Switch>
                <Route path="/" exact={true} component={ProductPage} />
                <Route path="/cart" component={Cart} />
                <Route path="/item/:id" component={ProductItem} />
            </Switch>
        </Router>
        </Provider>
    )
}

export default App;