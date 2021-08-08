export const mockInitialState = {
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
    cart: [{
        id: 1,
        title: "Oranges",
        description: "3 packs sweet oranges from Malaysia",
        price: 2.95,
        image: "https://images.pexels.com/photos/51958/oranges-fruit-vitamins-healthy-eating-51958.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        qty: 2
    }
    // {
    //     id: 3,
    //     title: "Lemon",
    //     description: " 2 packs Fresh and sweet lemon from Japan",
    //     price: 1.95,
    //     image: "https://images.pexels.com/photos/1414110/pexels-photo-1414110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    //     qty: 0
    // }
]
}

export const productMockReducer = (state = mockInitialState, action) => {
    switch (action.type) {
        case "ADD_CART" :
            let item;
            state.products.map((product) => {
                return (product.id === action.payload) ? item = product : product

            })
            
            const inCart = state.cart.find((item) => {
                return item.id === action.payload ? true : false
            })
            return {
                ...state,
                cart: inCart ? state.cart.map((item) => item.id === action.payload ? {...item, qty: item.qty + 1} : item) : [...state.cart, {...item, qty: 1}]
                // cart: [
                //     ...state.cart,
                //     item
                // ]
            };
            case "INCREASE_QTY":
                return {
                    ...state,
                    cart: state.cart.map((item) => {
                        return item.id === action.payload ? { ...item, qty: item.qty + 1} : item
                    })
                }
                
            case "DECREASE_QTY":
                return {
                    ...state,
                    cart: state.cart.map((item) => {
                        return item.id === action.payload ? { ...item, qty: item.qty - 1} : item
                    })
                }
             
            case "REMOVE_ITEM":
                return {
                    ...state,
                    cart: state.cart.filter((item) => {
                        return item.id !== action.payload
                    })
                }    
            default: return state
    }
}