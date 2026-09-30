import React from 'react';
import { partnersData } from '../data/partners';
import './PartnerGrid.css';

export default function PartnerGrid({ type = 'all' }) {
  const renderLogoPlaceholder = (partner) => {
    // Generates a clean, stylized institutional vector placeholder
    return (
      <div className={`logo-placeholder-graphic logo-${partner.id}`}>
        <span className="logo-placeholder-text">{partner.logoText}</span>
      </div>
    );
  };

  const renderInstitutions = () => (
    <div className="partner-section">
      <h3 className="partner-type-title">Istituzioni Promotrici</h3>
      <div className="institutions-grid">
        {partnersData.institutions.map((partner) => (
          <div key={partner.id} className="partner-card institution-card card">
            <div className="partner-header">
              {renderLogoPlaceholder(partner)}
              <div className="partner-meta">
                <h4 className="partner-name">{partner.name}</h4>
                <p className="partner-full-name">{partner.fullName}</p>
              </div>
            </div>
            <p className="partner-role">{partner.role}</p>
            {partner.url !== '#' && (
              <a href={partner.url} target="_blank" rel="noopener noreferrer" className="partner-link">
                Visita il sito ufficiale &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderSupport = () => (
    <div className="partner-section">
      <h3 className="partner-type-title">Associazioni e Partner di Supporto</h3>
      <div className="support-grid">
        {partnersData.support.map((partner) => (
          <a 
            key={partner.id} 
            href={partner.url} 
            target={partner.url !== '#' ? '_blank' : '_self'} 
            rel="noopener noreferrer" 
            className="partner-card support-card card"
          >
            {renderLogoPlaceholder(partner)}
            <h4 className="support-name">{partner.fullName}</h4>
            <span className="support-badge">{partner.name}</span>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <div className="partners-container">
      {(type === 'all' || type === 'institutions') && renderInstitutions()}
      {(type === 'all' || type === 'support') && renderSupport()}
    </div>
  );
}
