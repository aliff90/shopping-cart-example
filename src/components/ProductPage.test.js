import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { initialState, productReducer } from "../redux/product-reducer";
import ProductPage from "./ProductPage";
import { BrowserRouter as Router } from "react-router-dom";
import { createMemoryHistory } from "history";

const renderWithRedux = (
    component,
    { initialState, store=createStore(productReducer,initialState)} = {}
) => {
    const history = createMemoryHistory()
    return {
        
        ...render(<Router history={history}><Provider store={store}>{component}</Provider></Router>),
        store,
    }
}

test("should render product id 1",() => {
    const {getByTestId} = renderWithRedux(<ProductPage />)
    expect(getByTestId("product-1")).toBeInTheDocument()
})

test("should have length of 3", async () => {
    renderWithRedux(<ProductPage />)
    const state = screen.getAllByTestId(/product-/i)
    expect(state).toHaveLength(3)
})

test("cart number increase when add to cart", () => {
    renderWithRedux(<ProductPage />)
    const btn = screen.getAllByText(/Add to cart/i)
    const cartBtn = screen.getByText(/Cart:/i)
    fireEvent.click(btn[0])
    fireEvent.click(btn[2])
    expect(cartBtn.innerHTML).toBe("Cart: 2")
})

test("react router", () => {
    renderWithRedux(<ProductPage />)
    const item = screen.getByTitle(/Oranges/i);
    fireEvent.click(item)
    expect()
})