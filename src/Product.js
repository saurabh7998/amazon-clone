import React from "react";
import "./Product.css";


const Product = ({id, title, price, ratings, img}) => {
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
            <button>Add to Cart</button>
        </div>
    )
}


export default Product