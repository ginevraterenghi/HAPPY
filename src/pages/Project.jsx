import React from 'react';
import PhaseCard from '../components/PhaseCard';
import './Project.css';

export default function Project() {
  return (
    <div className="project-page">
      {/* Intro Hero */}
      <section className="project-hero section">
        <div className="container">
          <span className="page-badge font-mono">[ PROTOCOLLO METODOLOGICO ]</span>
          <h1 className="page-title">La Metodologia HAPPY</h1>
          <p className="lead page-lead">
            HAPPY integra la didattica strumentale con la kinesiologia applicata. Sviluppiamo strumenti kinesiologici attraverso un protocollo co-progettato da clinici e musicisti.
          </p>
        </div>
      </section>

      {/* Details & Statistics */}
      <section className="project-scientific-context section section-secondary">
        <div className="container scientific-container">
          <div className="scientific-text">
            <span className="tech-meta font-mono">// CONTESTO CLINICO</span>
            <h2>Epidemiologia delle Sindromi Posturali</h2>
            <p>
              Suonare uno strumento richiede un'incredibile coordinazione neuromotoria, ore di studio ripetitivo e posture asimmetriche che caricano il sistema scheletrico in crescita. Spesso i primi dolori vengono ignorati o considerati inevitabili.
            </p>
            <p>
              HAPPY risponde creando una mappa visiva ed ergoterapica condivisa tra Conservatorio, famiglie e terapisti per anticipare i fattori di rischio muscolo-tendineo.
            </p>
          </div>

          <div className="stat-card card">
            <span className="stat-meta font-mono">[ DATO STATISTICO ]</span>
            <div className="stat-num glow-text">1 su 3</div>
            <p className="stat-label">
              Dei giovani strumentisti manifesta rigidità e sindromi da sovraccarico funzionale.
            </p>
            <p className="stat-desc">
              Le indagini cliniche evidenziano dolori frequenti a polsi, dita e tratto cervicale prima dei 18 anni, spesso trascurati.
            </p>
          </div>
        </div>
      </section>

      {/* Extended Phases */}
      <section className="project-phases-extended section">
        <div className="container">
          <h2 className="section-title text-center">Fasi di Sviluppo del Protocollo</h2>
          <p className="lead text-center mb-xl">
            Un piano d'azione in 4 fasi per sviluppare risorse kinesiologiche validate in Ticino.
          </p>

          <div className="phases-list-detailed">
            
            {/* Phase 1 */}
            <div className="detailed-phase-row">
              <div className="phase-badge-large font-mono">01</div>
              <div className="phase-info">
                <span className="phase-tech font-mono">[ SURVEY_AND_ANALYSIS ]</span>
                <h3>Fase 1: Mappatura del Rischio Posturale</h3>
                <p>
                  Raccolta di dati quantitativi in Canton Ticino. Questionari mirati a docenti, genitori e professionisti della salute per comprendere i bisogni formativi ed epidemiologici.
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="detailed-phase-row">
              <div className="phase-badge-large font-mono">02</div>
              <div className="phase-info">
                <span className="phase-tech font-mono">[ DESIGN_WORKSHOPS ]</span>
                <h3>Fase 2: Co-design del Toolkit e Archivio Gesti</h3>
                <p>
                  Terapisti e strumentisti si riuniscono in sessioni di tracciamento video per identificare i punti critici di asse articolare e co-progettare le schede di riscaldamento.
                </p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="detailed-phase-row">
              <div className="phase-badge-large font-mono">03</div>
              <div className="phase-info">
                <span className="phase-tech font-mono">[ HEALTH_WEEKS_TRIAL ]</span>
                <h3>Fase 3: Sperimentazione HAPPY Health Weeks</h3>
                <p>
                  Integrazione dell'Archivio Gesti e delle routine di allungamento direttamente nelle aule del Conservatorio durante le ore di didattica strumentale.
                </p>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="detailed-phase-row">
              <div className="phase-badge-large font-mono">04</div>
              <div className="phase-info">
                <span className="phase-tech font-mono">[ SCIENTIFIC_CONGRESS ]</span>
                <h3>Fase 4: Giornata della Salute dei Giovani Musicisti</h3>
                <p>
                  Presentazione dei risultati dello screening posturale e rilascio pubblico del Toolkit ergoterapico open-access per la didattica musicale.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Diagrams Gallery Section */}
      <section className="illustrations-gallery section section-secondary">
        <div className="container text-center">
          <span className="section-meta font-mono">[ BIOMECHANICAL ILLUSTRATIONS ]</span>
          <h2 className="section-title">Schemi Articolari</h2>
          <p className="lead">
            Esempi di tracciamento goniometrico e linee di tensione realizzati per illustrare i gesti corretti ed errati:
          </p>
          
          <div className="illustrations-grid-placeholders">
            <div className="ill-placeholder card">
              <div className="ill-box">
                <svg viewBox="0 0 100 100" className="ill-svg">
                  <rect width="100" height="100" fill="rgba(255, 255, 255, 0.01)" />
                  <circle cx="50" cy="50" r="30" fill="none" stroke="var(--primary-color)" strokeWidth="1" strokeDasharray="2 2" />
                  <line x1="10" y1="50" x2="90" y2="50" stroke="var(--border-color)" strokeWidth="0.5" />
                  <line x1="50" y1="10" x2="50" y2="90" stroke="var(--border-color)" strokeWidth="0.5" />
                  <path d="M30,50 L50,30 L80,60" fill="none" stroke="var(--accent-color)" strokeWidth="2" />
                  <circle cx="30" cy="50" r="4" fill="var(--primary-color)" />
                  <circle cx="50" cy="30" r="4" fill="var(--primary-color)" />
                  <circle cx="80" cy="60" r="4" fill="var(--accent-color)" />
                </svg>
              </div>
              <p className="ill-caption font-mono">FIG_01: ANGLE_VIOLIN_SHOULDER [72° OK]</p>
            </div>

            <div className="ill-placeholder card">
              <div className="ill-box">
                <svg viewBox="0 0 100 100" className="ill-svg">
                  <rect width="100" height="100" fill="rgba(255, 255, 255, 0.01)" />
                  <line x1="10" y1="90" x2="90" y2="10" stroke="var(--primary-color)" strokeWidth="1.5" />
                  <line x1="10" y1="70" x2="70" y2="10" stroke="var(--accent-color)" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="5" fill="var(--primary-color)" />
                  <circle cx="40" cy="40" r="4" fill="var(--accent-color)" />
                </svg>
              </div>
              <p className="ill-caption font-mono">FIG_02: AXIS_PIANO_WRIST_ALIGNMENT</p>
            </div>

            <div className="ill-placeholder card">
              <div className="ill-box">
                <svg viewBox="0 0 100 100" className="ill-svg">
                  <rect width="100" height="100" fill="rgba(255, 255, 255, 0.01)" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="var(--border-color)" strokeWidth="1" />
                  <path d="M50,25 A25,25 0 0,1 75,50" fill="none" stroke="var(--accent-color)" strokeWidth="3" />
                  <circle cx="50" cy="25" r="4" fill="var(--primary-color)" />
                  <circle cx="75" cy="50" r="4" fill="var(--primary-color)" />
                </svg>
              </div>
              <p className="ill-caption font-mono">FIG_03: CERVICAL_ROTATION_LIMIT [15°]</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
