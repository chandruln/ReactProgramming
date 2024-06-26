export const reducer = (state, action) => {
    switch(action.type){
        case "ADD_PRODUCTS":
            return {
                ...state,
                products: action.payload,
            }
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [{...action.payload}, ...state.cart],
            }
        case "Remove_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload),
            }
        case "CHANGE_CART_QTY":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id === action.payload.id ?  (item.qty = action.payload.qty) : item.qty),
            }
        default:
            break;
    }
}