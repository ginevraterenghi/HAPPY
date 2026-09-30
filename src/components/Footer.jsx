import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        
        {/* Info Column */}
        <div className="footer-info">
          <Link to="/" className="footer-logo">
            <span className="logo-brand">HAPPY</span>
            <span className="logo-desc font-mono">GESTURE ARCHIVE & KINESIOLOGY</span>
          </Link>
          <p className="footer-about">
            Un progetto della <strong>Scuola Universitaria Professionale della Svizzera italiana (SUPSI)</strong> in collaborazione con il <strong>Conservatorio della Svizzera italiana</strong>.
          </p>
          <div className="footer-partners-badges">
            <span className="badge font-mono">SUPSI (DEASS)</span>
            <span className="badge font-mono">CONSERVATORIO CSI</span>
          </div>
        </div>

        {/* Links Column */}
        <div className="footer-links">
          <h4 className="footer-title font-mono">NAVIGAZIONE</h4>
          <ul className="footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/progetto">Il Progetto</Link></li>
            <li><Link to="/diaries">HAPPY Diaries</Link></li>
            <li><Link to="/toolkit">Archivio Gesti</Link></li>
            <li><Link to="/ricerca">La Ricerca</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/contatti">Contatti</Link></li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="footer-contact">
          <h4 className="footer-title font-mono">CONTATTI</h4>
          <p className="footer-contact-text">
            Per informazioni o richieste sul progetto:
          </p>
          <a href="mailto:cinzia.cruder@supsi.ch" className="footer-email-link">
            cinzia.cruder@supsi.ch
          </a>
          <div className="footer-legal">
            <Link to="/privacy" className="footer-privacy-link font-mono">Privacy Policy</Link>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="container footer-bottom">
        <p className="copyright-text">
          &copy; {currentYear} HAPPY Project. Tutti i diritti riservati. Sviluppato per fini di ricerca, prevenzione clinica ed educazione musicale.
        </p>
      </div>
    </footer>
  );
}
