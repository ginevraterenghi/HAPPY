import React from 'react';
import CTASection from '../components/CTASection';
import AnnotatedVideoPlayer from '../components/AnnotatedVideoPlayer';
import './TargetPages.css';

export default function HealthProfessionals() {
  return (
    <div className="target-page health-professionals-page">
      {/* Intro Hero */}
      <section className="target-hero section">
        <div className="container">
          <span className="target-badge font-mono">PROFILO // SANITARI & FISIOTERAPISTI</span>
          <h1 className="target-title">Sinergia Clinica e Analisi dei Carichi</h1>
          <p className="lead target-lead">
            I professionisti della salute apportano competenze kinesiologiche fondamentali. HAPPY unisce clinica e performance per validare scientificamente i protocolli di prevenzione dei musicisti.
          </p>
          <div className="target-hero-action">
            <a href="#survey-sanitari" className="btn btn-primary">
              Avvia Questionario Clinico
            </a>
          </div>
        </div>
      </section>

      {/* Embedded posture visualizer simulator */}
      <section className="target-visualization-section section section-secondary">
        <div className="container">
          <div className="target-grid-player">
            <div className="visualizer-content">
              <span className="tech-meta font-mono">[ ANALISI KINESIOLOGICA ]</span>
              <h2 className="section-title">Tracciamento delle Asimmetrie del Fiato</h2>
              <p className="target-text">
                Strumenti asimmetrici come il flauto traverso impongono al corpo posture ruotate e sollevamenti compensativi delle spalle. L'insorgere del dolore è correlato all'angolo cervicale e alla compressione dorsale.
              </p>
              <p className="target-text">
                Con la nostra mappatura visiva, i terapisti possono isolare e quantificare i sovraccarichi posturali dell'apparato respiratorio e muscoloscheletrico, facilitando l'educazione propriocettiva dell'allievo.
              </p>
              <div className="tech-bullet-box">
                <div className="bullet-item">
                  <span className="bullet-num font-mono">01</span>
                  <span><strong>Asse della spalla destra:</strong> Il tracciamento evidenzia sollevamenti anomali dovuti all'insufficiente sostegno diaframmatico.</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-num font-mono">02</span>
                  <span><strong>Goniometria cervicale:</strong> Monitora le inclinazioni del capo superiori a 15° per prevenire tensioni del trapezio.</span>
                </div>
              </div>
            </div>

            <div className="visualizer-player">
              <div className="player-frame-label font-mono">STRUMENTAZIONE DIDATTICA // FLAUTO TRAVERSO</div>
              <AnnotatedVideoPlayer instrument="flute" />
            </div>
          </div>
        </div>
      </section>

      {/* Specific Problem & Role */}
      <section className="target-details section">
        <div className="container target-details-container">
          <div className="details-block">
            <h2 className="block-title">Unire didattica e medicina delle arti performative</h2>
            <p>
              I giovani strumentisti in fase di sviluppo scheletrico presentano rischi elevati di consolidamento di asimmetrie funzionali. La collaborazione con terapisti, ortopedici e medici dello sport garantisce la correttezza anatomica del Toolkit di HAPPY.
            </p>
            <div className="highlight-quote font-mono">
              "La prevenzione primaria si attua integrando la goniometria clinica direttamente nel gesto artistico quotidiano."
            </div>
          </div>

          <div className="role-block card">
            <h3 className="role-title font-mono">RUOLO CLINICO IN HAPPY</h3>
            <ul className="role-list">
              <li>
                <strong>Validazione Scientifica:</strong> Certificare la correttezza biomeccanica dei movimenti e degli allungamenti inseriti nelle schede pratiche.
              </li>
              <li>
                <strong>Mappatura Casistiche:</strong> Fornire dati anonimizzati sull'incidenza di problematiche posturali nel territorio della Svizzera italiana.
              </li>
              <li>
                <strong>Ricerca Interdisciplinare:</strong> Contribuire alla stesura di articoli scientifici e linee guida per la salute del giovane musicista.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resources Preview */}
      <section className="target-resources section section-secondary">
        <div className="container">
          <h2 className="section-title">Risorse per i Professionisti</h2>
          <p className="lead">Materiali informativi e riferimenti scientifici:</p>
          
          <div className="grid-3 resources-preview-grid">
            <div className="resource-preview-card card">
              <span className="resource-type font-mono">[ BIBLIOGRAFIA MEDICA ]</span>
              <h4>Letteratura sulla Medicina delle Arti</h4>
              <p>Raccolta curata dei principali studi epidemiologici sulla prevalenza dei disturbi nei giovani strumentisti in età scolare.</p>
              <span className="status-badge font-mono">DISPONIBILE</span>
            </div>

            <div className="resource-preview-card card">
              <span className="resource-type font-mono">[ SCREENING TOOL ]</span>
              <h4>Griglie di Valutazione Posturale</h4>
              <p>Schede rapide di osservazione clinica pronte per l'uso durante le sessioni di terapia o valutazione in Conservatorio.</p>
              <span className="status-badge font-mono">FASE 2</span>
            </div>

            <div className="resource-preview-card card">
              <span className="resource-type font-mono">[ NETWORK CLINICO ]</span>
              <h4>Mappatura dei Terapisti in Ticino</h4>
              <p>Database dei professionisti specializzati in fisiologia della musica ed ergonomia performativa operativi in Svizzera.</p>
              <span className="status-badge font-mono">FASE 3</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Costruiamo la rete di prevenzione" 
        text="Il tuo contributo clinico è essenziale per la sicurezza dei ragazzi. Compila il sondaggio per professionisti."
        primaryBtnText="Sondaggio Professionisti"
        primaryBtnLink="/contatti#survey"
        theme="teal"
      />
    </div>
  );
}
