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
                    title={"Atomic Habits"} 
                    ratings={5} 
                    price={11.98} 
                    img={"https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg"}
                />
                <Product 
                    id={"1234"} 
                    title={"Atomic Habits"} 
                    ratings={5} 
                    price={11.98} 
                    img={"https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg"}
                />
            </div>
            <div className="home__row">
                <Product 
                    id={"1234"} 
                    title={"Atomic Habits"} 
                    ratings={5} 
                    price={11.98} 
                    img={"https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg"}
                />
                <Product 
                    id={"1234"} 
                    title={"Atomic Habits"} 
                    ratings={5} 
                    price={11.98} 
                    img={"https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg"}
                />
                <Product 
                    id={"1234"} 
                    title={"Atomic Habits"} 
                    ratings={5} 
                    price={11.98} 
                    img={"https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg"}
                />
            </div>
            <div className="home__row">
                <Product 
                    id={"1234"} 
                    title={"Atomic Habits"} 
                    ratings={5} 
                    price={11.98} 
                    img={"https://m.media-amazon.com/images/I/513Y5o-DYtL.jpg"}
                />
            </div>
        </div>
    )
}

export default Home