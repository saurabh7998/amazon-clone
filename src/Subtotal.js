import React from "react";

import "./Subtotal.css";
import {useSelector} from "react-redux";

const getTotal = (cart) => (cart?.reduce((amount, item) => item.price + amount,
                                         0));

const Subtotal = () => {
    const {cart, user} = useSelector((state) => state.cart)
    return (
        <div className="subtotal">
            {/* <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({cart.length} items):<strong>{`${value}`}</strong></p>
                        <small>
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getTotal(cart)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            /> */}
            <p>Subtotal ({cart.length} items):<strong>${getTotal(cart)}</strong>
            </p>
            <small>
                <input type="checkbox"/> This order contains a gift
            </small>
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;