import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";


const Product = ({id, title, price, ratings, img}) => {
    
    //const[state, dispatch] = useStateValue()
    const[{cart}, dispatch] = useStateValue();

    const addToCart = () => {
        //Add to bas{ket
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                price: price,
                ratings: ratings,
                img: img
            },
        });
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
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}


export default Product