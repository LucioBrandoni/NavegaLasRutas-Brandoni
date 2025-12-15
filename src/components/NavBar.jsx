
import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
        <ul className="navbar__links" style={{marginRight: '1.5rem'}}>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Inicio</NavLink></li>
          <li><NavLink to="/category/laptops" className={({ isActive }) => isActive ? "active" : ""}>Laptops</NavLink></li>
          <li><NavLink to="/category/perifericos" className={({ isActive }) => isActive ? "active" : ""}>Periféricos</NavLink></li>
          <li><NavLink to="/category/monitores" className={({ isActive }) => isActive ? "active" : ""}>Monitores</NavLink></li>
          <li><NavLink to="/category/componentes" className={({ isActive }) => isActive ? "active" : ""}>Componentes</NavLink></li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;
