import React, { useState } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct  = ({id, title, price, ratings, img}) => {

    const[{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id,
            title,
            price,
            ratings,
            img
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={img}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>

                <p className="checkoutProduct__price"> 
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(ratings).fill().map((_) => {
                            return (
                                <p>⭐️</p>
                            )
                        })
                    }
                </div>
                <button onClick={()=> removeFromCart()}>Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;