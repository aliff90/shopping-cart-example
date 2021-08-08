import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import { initialState, productReducer } from "../redux/product-reducer"
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

const mockedSetCount = jest.fn()

const renderWithRedux = (
    component,
    { initialState, store=createStore(productReducer,initialState)} = {}
) => {
    return {
        
        ...render(<BrowserRouter><Provider store={store}>{component}</Provider></BrowserRouter>),
        store,
    }
}

test("count should be in document", () => {
    renderWithRedux(<Header />)
    const count = screen.getByRole("button");
    expect(count).toBeInTheDocument()
})

test("should have initial count as 0", () => {
    renderWithRedux(<Header />)
    const count = screen.getByRole("button");
    expect(count).toHaveTextContent("0")
})