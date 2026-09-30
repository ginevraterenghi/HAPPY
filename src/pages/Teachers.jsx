import React from 'react';
import CTASection from '../components/CTASection';
import AnnotatedVideoPlayer from '../components/AnnotatedVideoPlayer';
import './TargetPages.css';

export default function Teachers() {
  return (
    <div className="target-page teachers-page">
      {/* Intro Hero */}
      <section className="target-hero section">
        <div className="container">
          <span className="target-badge font-mono">PROFILO // INSEGNANTI</span>
          <h1 className="target-title">Didattica Musicale e Consapevolezza del Gesto</h1>
          <p className="lead target-lead">
            Gli insegnanti hanno un ruolo unico: guidano lo studio quotidiano e sono i primi a poter identificare l'insorgere di disagi fisici o posture scorrette.
          </p>
          <div className="target-hero-action">
            <a href="#survey-insegnanti" className="btn btn-primary">
              Avvia Questionario Docenti
            </a>
          </div>
        </div>
      </section>

      {/* Embedded posture visualizer simulator */}
      <section className="target-visualization-section section section-secondary">
        <div className="container">
          <div className="target-grid-player">
            <div className="visualizer-content">
              <span className="tech-meta font-mono">[ STRUMENTO DI ANALISI ]</span>
              <h2 className="section-title">Valutazione Posturale in Aula</h2>
              <p className="target-text">
                Attraverso il tracciamento degli assi posturali, gli insegnanti possono individuare anomalie biomeccaniche invisibili ad occhio nudo. 
              </p>
              <p className="target-text">
                Ad esempio, il sollevamento impercettibile della spalla sinistra o il ripiegamento del polso bloccano la muscolatura del trapezio, limitando la fluidità e innescando dolori ricorrenti.
              </p>
              <div className="tech-bullet-box">
                <div className="bullet-item">
                  <span className="bullet-num font-mono">01</span>
                  <span><strong>Allineamento del collo:</strong> Riduce la pressione sulla colonna cervicale durante il bloccaggio del violino.</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-num font-mono">02</span>
                  <span><strong>Goniometria del gomito:</strong> Mantenere l'angolo ottimale aumenta la forza delle dita riducendo lo sforzo tendineo.</span>
                </div>
              </div>
            </div>

            <div className="visualizer-player">
              <div className="player-frame-label font-mono">STRUMENTAZIONE DIDATTICA // VIOLINO</div>
              <AnnotatedVideoPlayer instrument="violin" />
            </div>
          </div>
        </div>
      </section>

      {/* Specific Problem & Role */}
      <section className="target-details section">
        <div className="container target-details-container">
          <div className="details-block">
            <h2 className="block-title">Il ruolo dei docenti nella ricerca-azione</h2>
            <p>
              Durante le lezioni individuali, la postura e il gesto del musicista cambiano continuamente a seconda dello sforzo tecnico e della stanchezza. HAPPY fornisce agli insegnanti schede di osservazione e poster illustrativi per strutturare l'insegnamento in chiave kinesiologica.
            </p>
            <div className="highlight-quote font-mono">
              "L'insegnante di musica non è un terapista, ma il mediatore essenziale tra la corretta esecuzione artistica e la salute fisica dell'allievo."
            </div>
          </div>

          <div className="role-block card">
            <h3 className="role-title font-mono">OBIETTIVI CHIAVE</h3>
            <ul className="role-list">
              <li>
                <strong>Fornire Dati Kinesiologici:</strong> Mappare i punti critici di fatica degli studenti durante i diversi gradi di studio.
              </li>
              <li>
                <strong>Co-progettare il Toolkit:</strong> Adattare i protocolli medici alle dinamiche reali delle lezioni di musica.
              </li>
              <li>
                <strong>HAPPY Weeks:</strong> Testare gli esercizi di riscaldamento mirati e i diari digitali nelle proprie classi.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resources Preview */}
      <section className="target-resources section section-secondary">
        <div className="container">
          <h2 className="section-title">Materiali Didattici in Sviluppo</h2>
          <p className="lead">Risorse e schede anatomiche realizzate con il team medico-scientifico:</p>
          
          <div className="grid-3 resources-preview-grid">
            <div className="resource-preview-card card">
              <span className="resource-type font-mono">[ SCHEDA RISCALDAMENTO ]</span>
              <h4>Esercizi di Mobilità Strumentale</h4>
              <p>Sequenze di 5 minuti di mobilitazione e allungamento specifiche per archi, fiati e tastiere da eseguire prima di suonare.</p>
              <span className="status-badge font-mono">FASE 2</span>
            </div>

            <div className="resource-preview-card card">
              <span className="resource-type font-mono">[ LINEE GUIDA ]</span>
              <h4>Rilevamento Precoce della Fatica</h4>
              <p>Segnali posturali e comportamentali (irrigidimento, compensazioni) per capire quando inserire le micropause.</p>
              <span className="status-badge font-mono">FASE 2</span>
            </div>

            <div className="resource-preview-card card">
              <span className="resource-type font-mono">[ POSTER TECNICO ]</span>
              <h4>Ergonomia della Postazione</h4>
              <p>Grafiche vettoriali di allineamento da appendere in classe per monitorare altezza di leggio, sedia e angoli posturali.</p>
              <span className="status-badge font-mono">FASE 2</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Fai sentire la tua voce" 
        text="Il tuo contributo come insegnante è fondamentale. Partecipa al sondaggio per fornirci informazioni preziose."
        primaryBtnText="Sondaggio Insegnanti"
        primaryBtnLink="/contatti#survey"
        theme="teal"
      />
    </div>
  );
}
