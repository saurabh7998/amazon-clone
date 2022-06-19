export const initialState = {
    cart : []
};




function reducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TO_CART':
            //Logic to add to cart
            return{
                // ...state,
                cart: [...state.cart, action.item]
            }
            break;
        case 'REMOVE_FROM_CART':
            //Logic to remove from cart
            let newCart = [...state.cart];

            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id)

            if(index >= 0){
                //Item exists
                newCart.splice(index, 1);
            }else{
                console.warn("Item does not exist!");
            }

            return {
                // ...state,
                cart: newCart
            };
            break;
        default:
            return state;
    };
};


export default reducer;