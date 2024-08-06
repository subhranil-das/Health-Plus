import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import styled from 'styled-components';
import { ShoppingCartContext } from '../ShoppingCartContext'; // Correct the path as needed
import './Navbar.css';
import mainImg from '../NavImg/mainlogo2.png';
import searchImg from '../NavImg/search-w.png';

const Navbar = () => {
  const { cartItems } = useContext(ShoppingCartContext);
  const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="logo">
        <NavLink exact to="/">
          <img src={mainImg} alt="Logo" className='main-logo'/>
        </NavLink>
      </div>

      <ul>
        <li>
          <NavLink exact to="/" className="link">Home</NavLink>
        </li>
        <li>
          <NavLink to="/product" className="link">Product</NavLink>
        </li>
        <li>
          <NavLink to="/about" className="link">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="link">Contact</NavLink>
        </li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <img src={searchImg} alt='search-icon'/>
      </div>
      <div>
        <NavLink to="/cart" className="cart-trolley--link">
          <FaShoppingCart className="cart-trolley"/>
          {cartQuantity > 0 && (
            <span className='cart-total--item'>{cartQuantity}</span>
          )}
        </NavLink>
      </div>
      <NavLink to='/account' className="account">
        <FaUser />
      </NavLink>
    </div>
  );
}

export default Navbar;
