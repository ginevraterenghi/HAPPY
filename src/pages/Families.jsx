import React from 'react';
import CTASection from '../components/CTASection';
import AnnotatedVideoPlayer from '../components/AnnotatedVideoPlayer';
import './TargetPages.css';

export default function Families() {
  return (
    <div className="target-page families-page">
      {/* Intro Hero */}
      <section className="target-hero section">
        <div className="container">
          <span className="target-badge font-mono">PROFILO // FAMIGLIE</span>
          <h1 className="target-title">Ergonomia dello Studio a Casa</h1>
          <p className="lead target-lead">
            Le famiglie monitorano lo studio domestico. Anche senza competenze musicali, i genitori possono supportare i figli allestendo uno spazio ergonomico e monitorando la fatica fisica.
          </p>
          <div className="target-hero-action">
            <a href="#survey-famiglie" className="btn btn-primary">
              Avvia Questionario Genitori
            </a>
          </div>
        </div>
      </section>

      {/* Embedded posture visualizer simulator */}
      <section className="target-visualization-section section section-secondary">
        <div className="container">
          <div className="target-grid-player">
            <div className="visualizer-content">
              <span className="tech-meta font-mono">[ ANALISI POSTAZIONE ]</span>
              <h2 className="section-title">Ergonomia del Pianoforte a Casa</h2>
              <p className="target-text">
                Lo studio domestico rappresenta l'80% della pratica settimanale di un allievo. Spesso, sedie non regolabili o altezze errate forzano i bambini a spezzare i polsi o a contrarre i trapezi.
              </p>
              <p className="target-text">
                L'utilizzo del tracciatore posturale mostra chiaramente che allineando l'asse dell'avambraccio con la linea dei tasti si riduce lo sforzo flessorio, prevenendo infiammazioni precoci.
              </p>
              <div className="tech-bullet-box">
                <div className="bullet-item">
                  <span className="bullet-num font-mono">01</span>
                  <span><strong>Asse del gomito a 90°:</strong> I gomiti devono trovarsi all'altezza della tastiera per evitare di caricare le spalle.</span>
                </div>
                <div className="bullet-item">
                  <span className="bullet-num font-mono">02</span>
                  <span><strong>Polso allineato:</strong> Previene la compressione dei nervi della mano sotto sforzo.</span>
                </div>
              </div>
            </div>

            <div className="visualizer-player">
              <div className="player-frame-label font-mono">STRUMENTAZIONE DIDATTICA // PIANOFORTE</div>
              <AnnotatedVideoPlayer instrument="piano" />
            </div>
          </div>
        </div>
      </section>

      {/* Specific Problem & Role */}
      <section className="target-details section">
        <div className="container target-details-container">
          <div className="details-block">
            <h2 className="block-title">Ascoltare i segnali di sovraccarico fisico</h2>
            <p>
              I giovani musicisti tendono a nascondere il dolore per paura di dover sospendere le lezioni o apparire inadeguati. Forniamo alle famiglie strumenti non tecnici (come gli *HAPPY Diaries*) per monitorare la stanchezza fisica e stabilire buone abitudini di pausa.
            </p>
            <div className="highlight-quote font-mono">
              "Un ambiente di studio sano a casa consolida i progressi didattici e previene dolori cronici futuri."
            </div>
          </div>

          <div className="role-block card">
            <h3 className="role-title font-mono">COSA POSSONO FARE I GENITORI</h3>
            <ul className="role-list">
              <li>
                <strong>Verificare l'altezza delle sedute:</strong> Regolare seggiolini, panchetti e supporti per i piedi in base alla crescita fisica.
              </li>
              <li>
                <strong>Favorire le micropause:</strong> Ricordare di rilassare braccia e dita ogni 20-30 minuti di pratica.
              </li>
              <li>
                <strong>Compilare gli HAPPY Diaries:</strong> Dedicare 2 minuti a fine settimana per registrare i carichi fisici col proprio figlio.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Resources Preview */}
      <section className="target-resources section section-secondary">
        <div className="container">
          <h2 className="section-title">Strumenti per i Genitori</h2>
          <p className="lead">Linee guida semplici sviluppate dai nostri fisioterapisti:</p>
          
          <div className="grid-3 resources-preview-grid">
            <div className="resource-preview-card card">
              <span className="resource-type font-mono">[ GUIDA ERGONOMICA ]</span>
              <h4>Allestire l'angolo di studio</h4>
              <p>Misure e altezze consigliate per leggii, luci e sedie per garantire una corretta postura dei bambini durante la giornata.</p>
              <span className="status-badge font-mono">FASE 2</span>
            </div>

            <div className="resource-preview-card card">
              <span className="resource-type font-mono">[ SCHEDA ATTIVITÀ ]</span>
              <h4>Le pause attive</h4>
              <p>Brevi routine di gioco corporeo e rilassamento per scaricare le tensioni accumulate nelle mani e nel collo.</p>
              <span className="status-badge font-mono">FASE 2</span>
            </div>

            <div className="resource-preview-card card">
              <span className="resource-type font-mono">[ SCHEDA DIALOGO ]</span>
              <h4>Ascoltare il dolore corporeo</h4>
              <p>Esempi di domande e schemi visivi per favorire la comunicazione sul dolore fisico senza destare preoccupazione.</p>
              <span className="status-badge font-mono">FASE 2</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Unisciti al progetto" 
        text="Il benessere di tuo figlio inizia da una pratica consapevole. Compila il sondaggio per le famiglie."
        primaryBtnText="Sondaggio Famiglie"
        primaryBtnLink="/contatti#survey"
        theme="teal"
      />
    </div>
  );
}
