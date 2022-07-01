import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import './Header.css';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

const Header = () => {
    const[{cart, user}, dispatch] = useStateValue();
    console.log("displayName " + user?.displayName);

    const login_out = () => {
        if(user){
            auth.signOut();
        }
    }

    return(
        <nav className="header">
            {/* amazon logo on the left */}
            <Link to={'/'}>
                <img 
                    className="header__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon logo"
                />
            </Link>
            
            {/* search bar with icon */}
            <div className="header__search">
                <input type={"text"} className="header__searchInput"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            {/* Three links */}
            <div className="header__navLinks">
                {/* 1st link */}
                <Link to={!user && '/login'} className="header__link">
                    <div onClick={login_out} className="header__option">
                        <span className="header__optionLineOne">Hello {user?.displayName}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out': 'Sign in'}</span>
                    </div>
                </Link>

                {/* 2nd Link */}
                <Link to={'/'} className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo"> & Orders </span>
                    </div>
                </Link>

                {/* 3rd Link */}
                <Link to={'/'} className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Your</span>
                        <span className="header__optionLineTwo"> Prime</span>
                    </div>
                </Link>

                {/* 4th Link */}
                <Link to={'/checkout'} className="header__link">
                    <div className="header__shoppingCart">
                        {/* Shopping cart icon */}
                        <ShoppingCartIcon />
                        {/* No. of items in the cart */}
                        <span className="header__optionCartCount">{cart?.length}</span>
                    </div>
                </Link>

            </div>
            

        </nav>

    )
}

export default Header;