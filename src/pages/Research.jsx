import React, { useState } from 'react';
import { referencesData } from '../data/references';
import './Research.css';

export default function Research() {
  const [openSection, setOpenSection] = useState('rismus');

  const toggleSection = (sectionName) => {
    if (openSection === sectionName) {
      setOpenSection(null);
    } else {
      setOpenSection(sectionName);
    }
  };

  const renderSection = (key, data) => {
    const isOpen = openSection === key;
    return (
      <div key={key} className={`research-accordion-item card ${isOpen ? 'open' : ''}`}>
        <button 
          className="accordion-trigger" 
          onClick={() => toggleSection(key)}
          aria-expanded={isOpen}
        >
          <span className="accordion-title-text font-mono">[ {key.toUpperCase()} ] // {data.title}</span>
          <span className="accordion-icon">
            {isOpen ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="icon-svg">
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="icon-svg">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            )}
          </span>
        </button>
        
        <div className="accordion-content">
          <p className="research-description">{data.description}</p>
          <div className="research-references-block">
            <h4 className="ref-header-title font-mono">// BIBLIOGRAPHY_INDEX:</h4>
            <ul className="references-list-ul">
              {data.citations.map((cite) => (
                <li key={cite.id} className="reference-item">
                  <div className="citation-wrapper">
                    <span className="citation-text">{cite.citation}</span>
                    {cite.link !== '#' && (
                      <a href={cite.link} target="_blank" rel="noopener noreferrer" className="citation-link font-mono">
                        [ PUBMED_ARTICLE ] &rarr;
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="research-page">
      {/* Hero */}
      <section className="research-hero section">
        <div className="container text-center">
          <span className="page-badge font-mono">[ FONDAMENTO CLINICO ]</span>
          <h1 className="page-title">La Ricerca Scientifica</h1>
          <p className="lead page-lead">
            Il protocollo HAPPY affonda le radici nella letteratura scientifica internazionale sulle sindromi da sovraccarico biomeccanico e sulle metodologie di prevenzione attiva.
          </p>
        </div>
      </section>

      {/* Accordion List */}
      <section className="research-accordion-section section section-secondary">
        <div className="container accordion-container-max">
          <div className="section-header text-center">
            <span className="section-meta font-mono">[ CITATION DATABASE ]</span>
            <h2>Evidenze di Medicina delle Arti</h2>
            <p className="lead">Clicca sulle tematiche per espandere le evidenze scientifiche e visualizzare la bibliografia medica indicizzata.</p>
          </div>

          <div className="research-accordion">
            {Object.keys(referencesData).map(key => renderSection(key, referencesData[key]))}
          </div>
        </div>
      </section>
    </div>
  );
}
