import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { render, screen, fireEvent } from "@testing-library/react";
import { initialState, productReducer } from "../redux/product-reducer";
import Product from "./Product";
import { BrowserRouter, useParams } from "react-router-dom";
import { createMemoryHistory } from "history"
import userEvent from "@testing-library/user-event";
import { addCart } from "../redux/product-action";
import Header from "./Header"

const history = createMemoryHistory();
const renderWithRedux = (
    component,
    { initialState, store=createStore(productReducer,initialState)} = {}
) => {
    return {
        
        ...render(<BrowserRouter history={history}><Provider store={store}>{component}</Provider></BrowserRouter>),
        store,
    }
}


test("should render correctly", () => {
    renderWithRedux(<Product product={initialState.products[1]} />)
    const state = screen.getByTestId("product")
    expect(state).toHaveTextContent("apple")
})

// test("should test link", () => {
//     renderWithRedux(<Product product={initialState.products[0]} />)
//     const button = screen.getByRole("button", {name: /Add to cart/i})
//     userEvent.click(button);
//     expect(initialState.cart).toBe({
//         cart: {
//             id: 1,
//             title: "Oranges",
//             description: "3 packs sweet oranges from Malaysia",
//             price: 2.95,
//             image: "https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//             qty: 1
//         }
//     })
// })
test("should test link", () => {
    const add = jest.fn(addCart())
    renderWithRedux(<Product product={initialState.products[0]} />)
    const button = screen.getByRole("button", {name: /Add to cart/i})
    expect(button).toBeTruthy()
    // fireEvent.click(button);
    // renderWithRedux(<Header />)
    // const state = screen.getByText
    // expect(addCart).toHaveBeenCalledWith(addCart)
})