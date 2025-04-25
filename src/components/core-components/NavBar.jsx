import React from 'react';
import { NavLink } from 'react-router-dom';
import '../hooks/App.css';

export default function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">   
                <NavLink to="/" className="navbar-logo">
                QuickBite 🍔
                </NavLink>

            </div>
            <div className="nav-menu">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/cart" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            Cart
          </NavLink>
          <NavLink to="/menu" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            Menu
          </NavLink>
          <NavLink to="/restaurants" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>
            Restaurants
          </NavLink>
        </div>
        </nav>
    );
}
