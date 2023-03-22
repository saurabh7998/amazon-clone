import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import {useSelector} from "react-redux";

const Checkout = () => {
    const {cart, user} = useSelector((state) => state.cart)

    return (
        <div className="checkout">

            <div className="checkout__left">
                <img className="checkout__image"
                     src="https://images-na.ssl-images-amazon.com/images/G/01/kindle-content-smeghn/2022/kBD0606/KBHP_1500x300.jpg"/>

                {(cart?.length === 0) ? (
                                          <div> Your shopping cart is empty. Please add items to your
                                              cart to proceed.</div>
                                      ) :
                 (
                     <div>
                         Your shopping cart
                         {cart.map((item) => (
                             <CheckoutProduct
                                 id={item.id}
                                 title={item.title}
                                 price={item.price}
                                 ratings={item.ratings}
                                 img={item.img}
                             />
                         ))}
                     </div>
                 )}
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>

        </div>

    )
}

export default Checkout;