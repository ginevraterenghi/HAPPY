import React from 'react';
import PartnerGrid from '../components/PartnerGrid';
import './TeamPartners.css';

export default function TeamPartners() {
  const teamMembers = [
    {
      name: "Cinzia Cruder",
      role: "Project Leader & Lead Researcher",
      institution: "SUPSI, Dipartimento economia aziendale, sanità e sociale",
      bio: "Fisioterapista, PhD in Music Medicine presso la University of Birmingham. Specializzata nello studio dei disturbi muscoloscheletrici nei musicisti e nella promozione della salute fisica in ambito educativo."
    },
    {
      name: "Marco Barbero",
      role: "Scientific Advisor",
      institution: "SUPSI, Responsabile del Laboratorio di Ricerca in Riabilitazione",
      bio: "Professore di Fisioterapia, esperto in epidemiologia clinica e gestione dei disordini muscoloscheletrici legati alle attività professionali e artistiche."
    },
    {
      name: "Filippo Mangili",
      role: "Statistician & Data Scientist",
      institution: "SUPSI, Istituto Dalle Molle di studi sull'intelligenza artificiale (IDSIA)",
      bio: "Specialista nell'analisi di dati epidemiologici complessi e nello sviluppo di modelli predittivi per il monitoraggio longitudinale della salute."
    }
  ];

  return (
    <div className="team-partners-page">
      {/* Hero */}
      <section className="team-hero section">
        <div className="container">
          <h1 className="page-title">Il team e i partner</h1>
          <p className="lead page-lead">
            Il progetto HAPPY unisce competenze scientifiche, pedagogia musicale e clinica specialistica grazie alla collaborazione tra istituti di ricerca, scuole e associazioni professionali.
          </p>
        </div>
      </section>

      {/* Project Team */}
      <section className="project-team-section section section-secondary">
        <div className="container">
          <h2 className="section-title">Team di Progetto</h2>
          <p className="lead mb-xl">I ricercatori e gli specialisti che guidano e coordinano le attività scientifiche di HAPPY.</p>

          <div className="grid-3 team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="card team-card">
                <div className="team-avatar-placeholder">
                  {/* Stylized SVG icon representing researcher */}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="avatar-svg">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="team-member-name">{member.name}</h3>
                <span className="team-member-role">{member.role}</span>
                <span className="team-member-inst">{member.institution}</span>
                <p className="team-member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional and Support Grid */}
      <section className="institutions-partners-section section">
        <div className="container">
          <h2 className="section-title text-center">Istituzioni e Partner</h2>
          <p className="lead text-center mb-xl">Chi rende possibile il progetto HAPPY attraverso finanziamenti, patrocinio e cooperazione attiva.</p>
          
          <PartnerGrid type="all" />
        </div>
      </section>
    </div>
  );
}
