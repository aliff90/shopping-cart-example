// import React from "react";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import { render, screen, fireEvent } from "@testing-library/react";
// import { initialState, productReducer } from "../redux/product-reducer";
// import Product from "./Product";
// import { BrowserRouter } from "react-router-dom";

// const mockedSetCount = jest.fn()

// const products = [
//     {
//         id: 1,
//         title: "Oranges",
//         description: "3 packs sweet oranges from Malaysia",
//         price: 2.95,
//         image: "https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//         qty: 0
//     },
//     {
//         id: 2,
//         title: "Apples",
//         description: " 3 packs cruncy apples from Fiji",
//         price: 2.50,
//         image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//         qty: 0
//     },
//     {
//         id: 3,
//         title: "Lemon",
//         description: " 2 packs Fresh and sweet lemon from Japan",
//         price: 1.95,
//         image: "https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
//         qty: 0
//     }
// ]

// const renderWithRedux = (
//     component,
//     { initialState, store=createStore(productReducer,initialState)} = {}
// ) => {
//     return {
        
//         ...render(<BrowserRouter><Provider store={store}>{component}</Provider></BrowserRouter>),
//         store,
//     }
// }

// test("should render product id 1", async () => {
//     renderWithRedux(<Product product={products[0]} />);
//     const items = screen.getByTestId("product");
//     expect(items).toBeInTheDocument()
// })