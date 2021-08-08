export const addCart = (id) => {
    return {
        type: "ADD_CART",
        payload: id
    }
}

export const increaseQty = (id) => {
    return {
        type: "INCREASE_QTY",
        payload: id
    }
}

export const decreaseQty = (id) => {
    return {
        type: "DECREASE_QTY",
        payload: id
    }
}

export const removeItem = (id) => {
    return {
        type: "REMOVE_ITEM",
        payload: id
    }
}