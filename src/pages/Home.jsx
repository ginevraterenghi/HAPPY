import React from 'react';
import { Link } from 'react-router-dom';
import UserCard from '../components/UserCard';
import PhaseCard from '../components/PhaseCard';
import CTASection from '../components/CTASection';
import AnnotatedVideoPlayer from '../components/AnnotatedVideoPlayer';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section section">
        <div className="container hero-container">
          <div className="hero-content">
            <span className="hero-tagline font-mono">SUPSI & CONSERVATORIO DELLA SVIZZERA ITALIANA</span>
            <h1 className="hero-title">
              HAPPY — <span className="highlight-text glow-text">I gesti dei musicisti</span> al centro della prevenzione.
            </h1>
            <p className="lead hero-subtitle">
              Un archivio kinesiologico dinamico in co-progettazione tra musicisti e fisioterapisti per mappare le buone pratiche di movimento ed evitare patologie da sovraccarico.
            </p>
            <p className="hero-text">
              Il nucleo del progetto HAPPY è l'analisi visiva delle posture strumentali. Attraverso video annotati e linee di tracciamento biomeccanico, decodifichiamo i movimenti per renderli sicuri, ergonomici e facili da apprendere nella pratica quotidiana.
            </p>
            <div className="hero-actions">
              <Link to="/toolkit" className="btn btn-primary">
                Esplora l'Archivio Gesti
              </Link>
              <Link to="/progetto" className="btn btn-secondary font-mono">
                [ SPECIFICHE PROGETTO ]
              </Link>
            </div>
          </div>

          <div className="hero-player-container">
            <div className="player-frame-label font-mono">LIVE_DEMO_TRACKING // VIOLIN_POSTURE_01</div>
            <AnnotatedVideoPlayer instrument="violin" />
          </div>
        </div>
      </section>

      {/* Movement Archive Introduction Grid */}
      <section className="gesture-highlights section section-secondary">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-meta font-mono">[ ARCHIVIO DIAGNOSTICO ]</span>
            <h2 className="section-title">Focus Biomeccanico per Strumento</h2>
            <p className="lead section-subtitle">
              Seleziona uno strumento per visualizzare i tracciamenti geometrici delle posture e i punti critici di tensione.
            </p>
          </div>

          <div className="grid-3 gesture-preview-grid">
            <div className="card gesture-preview-card">
              <span className="preview-label font-mono">VIOLINO // 01</span>
              <h3 className="preview-title">Angolo Spalla-Polso</h3>
              <p className="preview-desc">Analisi del tensionamento cervicale e della flessione del tunnel carpale derivanti dal bloccaggio dello strumento.</p>
              <Link to="/toolkit?instrument=violin" className="preview-link font-mono">AVVIA SIMULATORE &rarr;</Link>
            </div>
            
            <div className="card gesture-preview-card">
              <span className="preview-label font-mono">PIANOFORTE // 02</span>
              <h3 className="preview-title">Asse Avambraccio-Tastiera</h3>
              <p className="preview-desc">Mappatura del polso spezzato e della postura seduta per ottimizzare il passaggio dell'energia nei tendini flessori.</p>
              <Link to="/toolkit?instrument=piano" className="preview-link font-mono">AVVIA SIMULATORE &rarr;</Link>
            </div>

            <div className="card gesture-preview-card">
              <span className="preview-label font-mono">FLAUTO // 03</span>
              <h3 className="preview-title">Sinfonia Respiratoria</h3>
              <p className="preview-desc">Verifica dell'angolo cervicale e del sollevamento compensativo delle spalle per liberare la cassa toracica.</p>
              <Link to="/toolkit?instrument=flute" className="preview-link font-mono">AVVIA SIMULATORE &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audiences section */}
      <section className="audiences-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-meta font-mono">[ NETWORK DI CURA ]</span>
            <h2 className="section-title">Profili di Prevenzione</h2>
            <p className="lead section-subtitle">
              Sviluppiamo risorse per allineare l'insegnamento musicale, il supporto familiare e la cura clinica.
            </p>
          </div>
          
          <div className="grid-3 audience-cards-grid">
            <UserCard 
              title="Insegnanti di musica" 
              text="Monitorate l'allineamento dei vostri allievi in tempo reale. Accedete a schede didattiche basate sull'analisi posturale vettoriale." 
              link="/insegnanti" 
              icon="teacher" 
            />
            <UserCard 
              title="Famiglie" 
              text="Supportate lo studio a casa impostando un'ergonomia corretta per leggii, sedute e angoli di illuminazione." 
              link="/famiglie" 
              icon="family" 
            />
            <UserCard 
              title="Professionisti della salute" 
              text="Collaborate all'archivio con dati kinesiologici e protocolli di riabilitazione per patologie tipiche dei musicisti." 
              link="/professionisti" 
              icon="health" 
            />
          </div>
        </div>
      </section>

      {/* 4 Phases Section */}
      <section className="phases-section section section-secondary">
        <div className="container">
          <div className="section-header">
            <span className="section-meta font-mono">[ ROADMAP SCIENTIFICA ]</span>
            <h2 className="section-title">Le Fasi del Progetto</h2>
            <p className="lead section-subtitle">
              Mappiamo le abitudini di studio per modellare l'archivio sulle reali necessità kinesiologiche.
            </p>
          </div>

          <div className="grid-4 phases-grid">
            <PhaseCard 
              number="1" 
              title="Sondaggi e Analisi" 
              description="Rileviamo i disturbi fisici ricorrenti e le pratiche preventive attuali nei Conservatori della Svizzera italiana." 
            />
            <PhaseCard 
              number="2" 
              title="Co-design dei Video" 
              description="Fisioterapisti e strumentisti definiscono i nodi chiave di movimento e registrano le sessioni diagnostiche." 
            />
            <PhaseCard 
              number="3" 
              title="HAPPY Weeks" 
              description="Introduciamo l'archivio interattivo e i diari digitali direttamente nelle classi dei docenti partecipanti." 
            />
            <PhaseCard 
              number="4" 
              title="Protocollo Clinico" 
              description="Pubblichiamo i risultati scientifici e rilasciamo le schede didattiche aperte per tutte le scuole di musica." 
            />
          </div>
        </div>
      </section>

      {/* Timeline / Participation steps */}
      <section className="participation-section section">
        <div className="container">
          <div className="section-header text-center">
            <span className="section-meta font-mono">[ CONTRIBUISCI ]</span>
            <h2 className="section-title">Prendi Parte alla Ricerca</h2>
            <p className="lead section-subtitle">
              L'archivio si arricchisce grazie alla collaborazione diretta tra clinica, didattica e performance.
            </p>
          </div>

          <div className="timeline-steps">
            <div className="timeline-step">
              <div className="step-num font-mono">01</div>
              <div className="step-content">
                <h3 className="step-title">Compila il Questionario</h3>
                <p className="step-desc">
                  Contribuisci al database epidemiologico indicando i punti fisici di affaticamento e le tue routine di studio quotidiano.
                </p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="step-num font-mono">02</div>
              <div className="step-content">
                <h3 className="step-title">Registra su HAPPY Diaries</h3>
                <p className="step-desc">
                  Traccia i tuoi tempi di studio, i livelli di dolore e i riposi effettuati sulla nostra piattaforma logbook interattiva.
                </p>
              </div>
            </div>

            <div className="timeline-step">
              <div className="step-num font-mono">03</div>
              <div className="step-content">
                <h3 className="step-title">Valutazione con Fisioterapisti</h3>
                <p className="step-desc">
                  Partecipa alle sessioni di co-design per registrare i gesti del tuo strumento e ricevere l'analisi biomeccanica personalizzata.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-xl">
            <Link to="/contatti" className="btn btn-accent btn-large">
              Partecipa al sondaggio online
            </Link>
          </div>
        </div>
      </section>

      {/* CTA section bottom */}
      <CTASection 
        title="Vuoi collaborare all'Archivio Gesti?" 
        text="Siamo alla ricerca di musicisti, docenti e clinici interessati a sviluppare congiuntamente moduli di prevenzione kinesiologica."
        primaryBtnText="Contatta il team"
        primaryBtnLink="/contatti"
        secondaryBtnText="Ultime News"
        secondaryBtnLink="/news"
        theme="teal"
      />
    </div>
  );
}
