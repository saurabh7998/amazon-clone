import React from "react";
import "./Product.css";

import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {addToCart} from "./reducers/cartReducer";


const Product = ({id, title, price, ratings, img}) => {
    
    //const[state, dispatch] = useStateValue()
    const {cart, user} = useSelector((state) => state.cart)

    const dispatch = useDispatch()

    const addInCart = () => {
        //Add to bas{ket
        dispatch(addToCart({
                               id: id,
                               title: title,
                               price: price,
                               ratings: ratings,
                               img: img
                           },))
    };

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price"> 
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(ratings).fill().map((_) => {
                            return (
                                <p>⭐️</p>
                            )
                        })
                    }
                </div>
            </div>
            <img className="product__image" src={`${img}`}/>
            <button onClick={addInCart}>Add to Cart</button>
        </div>
    )
}


export default Product