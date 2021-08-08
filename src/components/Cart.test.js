import React from "react";
import Cart from "./Cart";
import { createStore } from "redux";
import { initialState, productReducer } from "../redux/product-reducer";
import { mockInitialState, productMockReducer } from "./mockStore";
import {render, screen, fireEvent, cleanup} from "@testing-library/react"
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

const renderWithRedux = (
    component,
    {initialState, store=createStore(productReducer, initialState)} = {}
) => {
    return {
        ...render(<Router><Provider store={store}>{component}</Provider></Router>),
        store
    }
}

const renderWithMockRedux = (
    component,
    {mockInitialState, store=createStore(productMockReducer, mockInitialState)} = {}
) => {
    return {
        ...render(<Router><Provider store={store}>{component}</Provider></Router>),
        store
    }
}

describe("<Cart />", () => {
    test("should render Cart", () => {
        renderWithRedux(<Cart />)
        const title = screen.getByText(/Shopping cart is empty/i)
        expect(title).toBeInTheDocument()
    })
    
    test("should render correct item IN Cart", () => {
        renderWithMockRedux(<Cart />)
        const state = screen.getByTitle(/Oranges/i)
        expect(state).toBeInTheDocument()
        screen.debug()
    })

    test("should have '-' button", () => {
        renderWithMockRedux(<Cart />)
        const btn = screen.getByText(/-/i)
        expect(btn).toBeInTheDocument()
    })

    test("should show empty cart when qty is 0 when current qty is 2", () => {
        renderWithMockRedux(<Cart />)
        const btn = screen.getByText(/-/i)
        fireEvent.click(btn)
        fireEvent.click(btn)
        const title = screen.getByText(/Shopping cart is empty/i)
        expect(title).toBeInTheDocument()
    })

    test("should increase qty by 1 when add button is clicked when current qty is 2", () => {
        renderWithMockRedux(<Cart />)
        const btn = screen.getByText("+")
        const qty = screen.getByTitle(/qty/i)
        fireEvent.click(btn)
        expect(qty.innerHTML).toBe("3")
    })

    test("should show the correct subtotal", () => {
        renderWithMockRedux(<Cart />)
        const subtotal = screen.getByTestId("subtotal")
        expect(subtotal.innerHTML).toBe("$5.90")
    })

    test("should show the correct total", () => {
        renderWithMockRedux(<Cart />)
        const total = screen.getByTestId("total")
        expect(total.innerHTML).toBe("$7.90")
    })
})



