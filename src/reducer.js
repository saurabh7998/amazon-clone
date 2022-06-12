export const initialState = {
    cart : []
};

function reducer(state, action){
    switch(action.type){
        case 'ADD_TO_CART':
            //Logic to add to basket
            return{
                ...state,
                cart: [...state.cart, action.item]
            }
            break;
        case 'REMOVE_FROM_CART':
            break;
        default:
            return state;
    };
};


export default reducer;