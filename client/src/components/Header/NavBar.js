import React from "react";
import "./NavBar.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
            <NavLink to="/">
            <img src="../amazon_PNG25.png" alt="" />
            </NavLink>
          </div>
          <div className="nav_searchbaar">
            <input type="text" name="" id="" />
            <div className="search_icon">
              <SearchRoundedIcon />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="nav_btn">
            <NavLink to="/login">LogIn/SignIn</NavLink>
          </div>
          <div className="cart_btn">
            <Badge badgeContent={4} color="primary">
               <ShoppingCartIcon id="icon"/>
            </Badge>
            <p>Cart</p>
          </div>
          <Avatar className='avtar'/>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
