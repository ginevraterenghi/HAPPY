import React from 'react';
import { Link } from 'react-router-dom';
import './CTASection.css';

export default function CTASection({ 
  title, 
  text, 
  primaryBtnText, 
  primaryBtnLink, 
  secondaryBtnText, 
  secondaryBtnLink,
  theme = 'teal' /* 'teal' or 'coral' or 'cream' */
}) {
  return (
    <section className={`cta-section theme-${theme}`}>
      <div className="container cta-container">
        <div className="cta-content">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-text">{text}</p>
        </div>
        <div className="cta-actions">
          {primaryBtnText && primaryBtnLink && (
            primaryBtnLink.startsWith('http') || primaryBtnLink.startsWith('#') ? (
              <a href={primaryBtnLink} className="btn btn-accent cta-btn-primary">
                {primaryBtnText}
              </a>
            ) : (
              <Link to={primaryBtnLink} className="btn btn-accent cta-btn-primary">
                {primaryBtnText}
              </Link>
            )
          )}
          {secondaryBtnText && secondaryBtnLink && (
            secondaryBtnLink.startsWith('http') || secondaryBtnLink.startsWith('#') ? (
              <a href={secondaryBtnLink} className="btn btn-secondary cta-btn-secondary">
                {secondaryBtnText}
              </a>
            ) : (
              <Link to={secondaryBtnLink} className="btn btn-secondary cta-btn-secondary">
                {secondaryBtnText}
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  );
}
