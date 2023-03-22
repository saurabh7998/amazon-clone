import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    user: null,
};

const cartSlice = createSlice({
                                  name: "cart",
                                  initialState,
                                  reducers: {
                                      addToCart(state, action) {
                                          state.cart.push(action.payload.item)
                                      },

                                      removeFromCart(state, action) {
                                          let newCart = [...state.cart];

                                          const index = state.cart.findIndex(
                                              (cartItem) =>
                                                  cartItem.id ===
                                                  action.payload.id)

                                          if (index >= 0) {
                                              //Item exists
                                              newCart.splice(index, 1);
                                          } else {
                                              console.warn(
                                                  "Item does not exist!");
                                          }
                                          state.cart = newCart
                                      },

                                      setUser(state, action) {
                                          state.user = action.payload.user.displayName !== null ? action.payload.user.displayName : ''
                                      }
                                  }

                              })



export const {addToCart, removeFromCart, setUser} = cartSlice.actions
export default cartSlice.reducer