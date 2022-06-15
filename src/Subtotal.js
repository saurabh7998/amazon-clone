
import React from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import "./Subtotal.css"; 



const Subtotal = () => {
    const[{cart}, ] = useStateValue()

    

    
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({cart.length} items):<strong>{`${value}`}</strong></p>
                        <small>
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}


export default Subtotal;