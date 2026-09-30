import React from 'react';
import { Link } from 'react-router-dom';
import './UserCard.css';

export default function UserCard({ title, text, link, icon }) {
  // Map icons to simple styled SVG elements
  const renderIcon = () => {
    switch (icon) {
      case 'teacher':
        return (
          <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
          </svg>
        );
      case 'family':
        return (
          <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case 'health':
        return (
          <svg className="card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="card user-card">
      <div className="user-card-icon-container">
        {renderIcon()}
      </div>
      <h3 className="user-card-title">{title}</h3>
      <p className="user-card-text">{text}</p>
      <Link to={link} className="user-card-link">
        Scopri di più <span className="arrow">&rarr;</span>
      </Link>
    </div>
  );
}
