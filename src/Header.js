import React from "react";
import './Header.css';

const Header = () => {
    return(
        <nav className="header">
            {/* amazon logo on the left */}
            <img 
                className="header__logo"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
            />
        </nav>
    )
}

export default Header;