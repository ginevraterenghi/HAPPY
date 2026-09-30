import React, { useState, useEffect } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Scroll to hash survey on load if present
  useEffect(() => {
    if (window.location.hash === '#survey') {
      const element = document.getElementById('survey-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error for this field
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Il nome è obbligatorio.';
    if (!formData.email.trim()) {
      newErrors.email = "L'email è obbligatoria.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Inserisci un indirizzo email valido.";
    }
    if (!formData.message.trim()) newErrors.message = 'Il messaggio è obbligatorio.';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form data submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero section">
        <div className="container text-center">
          <span className="page-badge font-mono">[ PROTOCOLLO COMUNICAZIONE ]</span>
          <h1 className="page-title">Contatti & Canali di Ricerca</h1>
          <p className="lead page-lead">
            Per collaborazioni, richieste di dati o adesione all'Archivio Gesti, contatta il coordinamento SUPSI.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="contact-grid-section section section-secondary">
        <div className="container contact-grid-container">
          
          {/* Info Block */}
          <div className="contact-info-block">
            <span className="tech-meta font-mono">// COORDINATE ACCADEMICHE</span>
            <h2 className="info-section-title">Coordinamento SUPSI</h2>
            <p className="contact-text">
              Il progetto HAPPY ha sede operativa presso il Dipartimento economia aziendale, sanità e sociale (DEASS) a Manno.
            </p>

            <div className="contact-details-list font-mono">
              <div className="contact-detail-item">
                <span className="detail-label">RESPONSABILE_SCIENTIFICO:</span>
                <span className="detail-val">Dr. Cinzia Cruder</span>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">CANALE_EMAIL:</span>
                <a href="mailto:cinzia.cruder@supsi.ch" className="detail-email-link">
                  cinzia.cruder@supsi.ch
                </a>
              </div>
              <div className="contact-detail-item">
                <span className="detail-label">INDIRIZZO_POSTALE:</span>
                <span className="detail-val">
                  SUPSI - DEASS // Stabile Piazzetta // Via d'Argine 1a // CH-6930 Manno
                </span>
              </div>
            </div>

            {/* SUPSI & CSI badging */}
            <div className="supsi-logo-placeholder-container">
              <div className="supsi-logo-card">
                <span className="supsi-acronym font-mono">SUPSI (DEASS)</span>
                <span className="supsi-subtext">Scuola Universitaria Professionale</span>
              </div>
              <div className="csi-logo-card">
                <span className="csi-acronym font-mono">CSI (SUPSI)</span>
                <span className="csi-subtext">Conservatorio della Svizzera italiana</span>
              </div>
            </div>
          </div>

          {/* Form Block */}
          <div className="contact-form-block card">
            <div className="form-header-bar font-mono">
              <span className="status-dot-blink"></span>
              <span>FEEDBACK_TERMINAL // CH-01</span>
            </div>

            {submitted ? (
              <div className="form-success-alert text-center font-mono">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="success-icon">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <h4>TRASMISSIONE AVVENUTA</h4>
                <p className="text-muted">Il tuo messaggio è stato cifrato e inviato al server di coordinamento.</p>
                <button className="btn btn-secondary btn-sm" onClick={() => setSubmitted(false)}>
                  [ RE-INIZIALIZZA FORM ]
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name" className="form-label font-mono">UTENTE.nome_cognome()</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={`form-control font-mono ${errors.name ? 'is-invalid' : ''}`}
                    placeholder="Nome e Cognome"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <span className="invalid-feedback font-mono">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label font-mono">UTENTE.indirizzo_email()</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`form-control font-mono ${errors.email ? 'is-invalid' : ''}`}
                    placeholder="la-tua@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <span className="invalid-feedback font-mono">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label font-mono">UTENTE.messaggio_corpo()</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className={`form-control font-mono ${errors.message ? 'is-invalid' : ''}`}
                    placeholder="Testo del messaggio..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && <span className="invalid-feedback font-mono">{errors.message}</span>}
                </div>

                <button type="submit" className="btn btn-primary btn-block font-mono">
                  [ TRASMETTI MESSAGGIO ]
                </button>

                <p className="form-backend-notice font-mono text-muted">
                  *Nota: La cifratura dei pacchetti è simulata in ambiente staging.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Survey Anchor Block */}
      <section className="contact-survey-section section section-secondary" id="survey-section">
        <div className="container text-center max-width-700">
          <span className="section-meta font-mono">[ PORTALE QUESTIONARI ]</span>
          <h2 className="section-title text-center">Screening Epidemiologico Online</h2>
          <p className="lead">
            I dati raccolti tramite i canali di screening protetti garantiscono l'elaborazione scientifica del Toolkit.
          </p>
          <div className="survey-buttons-grid">
            <a href="https://www.supsi.ch" target="_blank" rel="noopener noreferrer" className="btn btn-primary font-mono">
              [ SURVEY DOCENTI ] &rarr;
            </a>
            <a href="https://www.supsi.ch" target="_blank" rel="noopener noreferrer" className="btn btn-accent font-mono">
              [ SURVEY FAMIGLIE ] &rarr;
            </a>
            <a href="https://www.supsi.ch" target="_blank" rel="noopener noreferrer" className="btn btn-secondary font-mono">
              [ SURVEY CLINICI ] &rarr;
            </a>
          </div>
          <p className="survey-note font-mono mt-lg text-muted">
            *I sondaggi sono erogati sui server criptati SUPSI in ottemperanza alla normativa LPD svizzera.
          </p>
        </div>
      </section>
    </div>
  );
}
