import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const activeStyle = {
  color: 'purple',
};

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <img alt="Carved Rock Fitness" src="/images/logo.png" />
            </Link>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                console.log(`NavLink /cart isActive ${isActive}`);
                return isActive ? activeStyle : {};
              }}
              to="/shoes"
            >
              Shoes
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                console.log(`NavLink /cart isActive ${isActive}`);
                return isActive ? activeStyle : {};
              }}
              to="/cart"
            >
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
