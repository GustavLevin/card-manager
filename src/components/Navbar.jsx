import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Navbar() {
  const themeMode = useSelector((state) => state.theme.mode);

  const navbarStyles = {
    padding: '10px 20px',
    backgroundColor: themeMode === 'dark' ? '#333' : '#f8f8f8',
    color: themeMode === 'dark' ? '#fff' : '#333',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const linkStyles = {
    color: themeMode === 'dark' ? '#fff' : '#333',
    textDecoration: 'none',
    marginRight: '15px',
  };

  return (
    <nav style={navbarStyles}>
      <div>
        <NavLink to="/" style={linkStyles}>
          Home
        </NavLink>
        <NavLink to="/addcard" style={linkStyles}>
          Add Card
        </NavLink>
        <NavLink to="/settings" style={linkStyles}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
