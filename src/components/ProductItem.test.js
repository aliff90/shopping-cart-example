import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { BrowserRouter, useParams } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { initialState, productReducer } from "../redux/product-reducer";
import { addCart } from "../redux/product-action";
import ProductItem from "./ProductItem";
import ProductPage from "./ProductPage";

const renderWithRedux = (
    component,
    {initialState, store=createStore(productReducer, initialState)} = {}
) => {
    return {
        ...render(<BrowserRouter><Provider store={store}>{component}</Provider></BrowserRouter>),
        store
    }
}

test("should return correct title with correct id", () => {
    renderWithRedux(<ProductItem />)
    const item = screen.getByTitle(/item-title/i)
    expect(item).toHaveTextContent("Oranges")
})

test("should increase cart when clicked add to cart", () => {
    renderWithRedux(<ProductItem />)
    const btn = screen.getByText(/Add to cart/i)
    fireEvent.click(btn);
    const cartBtn = screen.getByText(/Cart:/i)
    expect(cartBtn.innerHTML).toBe("Cart: 1")
})