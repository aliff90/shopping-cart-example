import { productReducer } from "./product-reducer";
import { addCart, increaseQty, decreaseQty, removeItem } from "./product-action";

const initialState = {
    products: [
        {
            id: 1,
            title: "Oranges",
            description: "3 packs sweet oranges from Malaysia",
            price: 2.95,
            image: "https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            qty: 0
        },
        {
            id: 2,
            title: "Apples",
            description: " 3 packs cruncy apples from Fiji",
            price: 2.50,
            image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            qty: 0
        },
        {
            id: 3,
            title: "Lemon",
            description: " 2 packs Fresh and sweet lemon from Japan",
            price: 1.95,
            image: "https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            qty: 0
        }
    ],
    cart: []
}

describe("addCart", () => {
    test("should return initial state", () => {
        expect(productReducer(undefined, [])).toEqual(initialState)
    })
    
    test("should add to cart of selected item", () => {
         const action = productReducer(initialState, addCart(1));
        expect(action.cart).toEqual([{
            id: 1,
            title: "Oranges",
            description: "3 packs sweet oranges from Malaysia",
            price: 2.95,
            image: "https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            qty: 1
        }])
    })
    
    test("should increase qty to 2 when adding existing item in cart", () => {
        const prevState = {
            ...initialState,
            cart: [{
                id: 1,
                title: "Oranges",
                description: "3 packs sweet oranges from Malaysia",
                price: 2.95,
                image: "https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                qty: 1
            }]
        }
        const action =  productReducer(prevState, addCart(1));
        expect(action.cart[0].qty).toEqual(2)
    })
    
    test("should add another product if different id with qty=1", () => {
        const prevState = {
            ...initialState,
            cart: [{
                id: 1,
                title: "Oranges",
                description: "3 packs sweet oranges from Malaysia",
                price: 2.95,
                image: "https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                qty: 1
            }]
        }
        const action =  productReducer(prevState, addCart(3));
        expect(action.cart[1]).toEqual({
            id: 3,
            title: "Lemon",
            description: " 2 packs Fresh and sweet lemon from Japan",
            price: 1.95,
            image: "https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            qty: 1
        })
    })
})

describe("increaseQty", () => {
    test("should increase qty to 1 if existing item in cart", () => {
        const prevState = {
            ...initialState,
            cart: [{
                id: 2,
                title: "Apples",
                description: " 3 packs cruncy apples from Fiji",
                price: 2.50,
                image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                qty: 1
            }]
        }

        const action = productReducer(prevState, increaseQty(2));
        expect(action.cart[0]).toEqual({
            id: 2,
            title: "Apples",
            description: " 3 packs cruncy apples from Fiji",
            price: 2.50,
            image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            qty: 2
        })
    })
})

describe("decreaseQty", () => {
    test("should decrease qty by 1", () => {
        const prevState = {
            ...initialState,
            cart: [{
                id: 3,
                title: "Lemon",
                description: " 2 packs Fresh and sweet lemon from Japan",
                price: 1.95,
                image: "https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                qty: 3
            }]
        }
        const action = productReducer(prevState, decreaseQty(3));
        expect(action.cart[0]).toEqual({
            id: 3,
            title: "Lemon",
            description: " 2 packs Fresh and sweet lemon from Japan",
            price: 1.95,
            image: "https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            qty: 2
        })
    })
})

describe("removeItem", () => {
    test("should remove item in cart", () => {
        const prevState = {
            ...initialState,
            cart: [
                {
                    id: 1,
                    title: "Oranges",
                    description: "3 packs sweet oranges from Malaysia",
                    price: 2.95,
                    image: "https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    qty: 1
                },
                {
                    id: 2,
                    title: "Apples",
                    description: " 3 packs cruncy apples from Fiji",
                    price: 2.50,
                    image: "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    qty: 2
                }
                ,{
                id: 3,
                title: "Lemon",
                description: " 2 packs Fresh and sweet lemon from Japan",
                price: 1.95,
                image: "https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                qty: 0
            }]
        }
        const action = productReducer(prevState, removeItem(2))
        expect(action.cart).toEqual([
            {
                id: 1,
                title: "Oranges",
                description: "3 packs sweet oranges from Malaysia",
                price: 2.95,
                image: "https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                qty: 1
            }
            ,{
            id: 3,
            title: "Lemon",
            description: " 2 packs Fresh and sweet lemon from Japan",
            price: 1.95,
            image: "https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            qty: 0
        }])
    })
})