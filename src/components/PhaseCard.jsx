import React from 'react';
import './PhaseCard.css';

export default function PhaseCard({ number, title, description, highlightedText }) {
  return (
    <div className={`phase-card card ${highlightedText ? 'featured' : ''}`}>
      <div className="phase-header">
        <div className="phase-number">{number}</div>
        <h3 className="phase-title">{title}</h3>
      </div>
      {highlightedText && (
        <div className="phase-highlight-box">
          <p className="phase-highlight-text">{highlightedText}</p>
        </div>
      )}
      <p className="phase-description">{description}</p>
    </div>
  );
}
