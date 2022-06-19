import React from "react";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";


const Home = () => {
    const[{cart}, ] = useStateValue();
    console.log({cart});
    return (
        <div className="home">
            <img
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg/"
            />
            <div className="home__row">
                <Product 
                    id={"1234"} 
                    title={"Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones "} 
                    ratings={5} 
                    price={11.98} 
                    img={"https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg"}
                />
                <Product 
                    id={"1235"} 
                    title={"Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal"} 
                    ratings={4} 
                    price={74.99} 
                    img={"https://m.media-amazon.com/images/I/61V5O0UpgqS._AC_SX679_.jpg"}
                />
            </div>
            <div className="home__row">
                <Product 
                    id={"1236"} 
                    title={"2022 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (5th Generation)"} 
                    ratings={5} 
                    price={559} 
                    img={"https://m.media-amazon.com/images/I/61XZQXFQeVL._AC_SX679_.jpg"}
                />
                <Product 
                    id={"1237"} 
                    title={"Google Pixel 6 Pro - 5G Android Phone - Unlocked Smartphone with Advanced Pixel Camera and Telephoto Lens - 128GB - Stormy Black"} 
                    ratings={4} 
                    price={789} 
                    img={"https://m.media-amazon.com/images/I/716n8eAia+L._AC_SX522_.jpg"}
                />
                <Product 
                    id={"1238"} 
                    title={"Kindle Paperwhite (8 GB) – Now with a 6.8 inch display and adjustable warm light"} 
                    ratings={4} 
                    price={139} 
                    img={"https://m.media-amazon.com/images/I/51QCk82iGcL._AC_SX679_.jpg"}
                />
            </div>
            <div className="home__row">
                <Product 
                    id={"1238"} 
                    title={"Sony 65 Inch 4K Ultra HD TV A80K Series: BRAVIA XR OLED Smart Google TV with Dolby Vision HDR and Exclusive Features for The Playstation® 5 XR65A80K- 2022 Model"} 
                    ratings={5} 
                    price={2498} 
                    img={"https://m.media-amazon.com/images/I/81JoZeM2V2L._AC_SX679_.jpg"}
                />
            </div>
        </div>
    )
}

export default Home