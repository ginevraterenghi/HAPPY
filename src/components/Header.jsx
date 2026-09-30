import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header-wrapper">
      <div className="container header-container">
        <NavLink to="/" className="header-logo" onClick={closeMenu}>
          <span className="logo-brand">HAPPY</span>
          <span className="logo-separator">|</span>
          <span className="logo-subtitle font-mono">GESTURE ARCHIVE</span>
        </NavLink>

        {/* Live Status indicator */}
        <div className="header-live-status font-mono">
          <span className="status-dot-blink"></span>
          <span className="status-label">TRACKING: ACTIVE</span>
        </div>

        {/* Mobile menu toggle */}
        <button 
          className={`nav-toggle ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation links */}
        <nav className={`header-nav ${isOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/progetto" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                Il Progetto
              </NavLink>
            </li>
            <li>
              <NavLink to="/diaries" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                Diaries
              </NavLink>
            </li>
            <li>
              <NavLink to="/toolkit" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                Archivio Gesti
              </NavLink>
            </li>
            <li>
              <NavLink to="/ricerca" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                La Ricerca
              </NavLink>
            </li>
            <li>
              <NavLink to="/news" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                News
              </NavLink>
            </li>
            <li>
              <NavLink to="/contatti" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={closeMenu}>
                Contatti
              </NavLink>
            </li>
          </ul>

          <div className="nav-cta-container">
            <NavLink to="/contatti#survey" className="btn btn-primary header-cta" onClick={closeMenu}>
              Partecipa al Sondaggio
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
