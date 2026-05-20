import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <NavLink to="/" className="nav-logo">
          <img src="/logo.png" alt="Logo lehTECH" className="header-logo" />
        </NavLink>
        <nav className="nav-links">
          <NavLink 
            to="/" 
            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
          >
            Início
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
          >
            Sobre
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
          >
            Projetos
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => isActive ? "nav-link active" : "nav-link"}
          >
            Contato
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
