import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <div className="header">
      <img
        className="header_logo"
        src="https://res.cloudinary.com/dh0pbh1ah/image/upload/v1600991600/amazon-logo-rgb-01_kgy6nf.png"
        alt=""
      />

      <div className="header_search">
        <input className="header_searchInput" type="text" name="" id="" />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header__optionLineOne">Hello Khoury</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>

      <div className="header_optionBasket">
        <ShoppingBasketIcon />
        <span className="header__optionLineTwo header_basketCount">0</span>
      </div>
    </div>
  );
}

export default Header;
