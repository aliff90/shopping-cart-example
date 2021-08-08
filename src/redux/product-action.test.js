import { addCart, increaseQty, decreaseQty, removeItem } from "./product-action";

test("should create addCart action", () => {
    const action = addCart({id: "1"});
    expect(action).toEqual({
        type: "ADD_CART",
        payload: {id: "1"}
    })
})

test("should create increaseQty action", () => {
    const action = increaseQty({id: "2"})
    expect(action).toEqual({
        type: "INCREASE_QTY",
        payload: {id: "2"}
    })
})

test("should create decreaseQty", () => {
    const action = decreaseQty({id : "3"})
    expect(action).toEqual({
        type: "DECREASE_QTY",
        payload: {id: "3"}
    })
})

test("should removeItem action", () => {
    const action = removeItem({id: "2"});
    expect(action).toEqual({
        type: "REMOVE_ITEM",
        payload: {id: "2"}
    })
})