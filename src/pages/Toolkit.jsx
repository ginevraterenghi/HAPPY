import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AnnotatedVideoPlayer from '../components/AnnotatedVideoPlayer';
import './Toolkit.css';

export default function Toolkit() {
  const location = useLocation();
  const [selectedInstrument, setSelectedInstrument] = useState('violin');

  // Sync state with query parameter if present (e.g. ?instrument=piano)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const instrumentParam = params.get('instrument');
    if (instrumentParam && ['violin', 'piano', 'flute'].includes(instrumentParam)) {
      setSelectedInstrument(instrumentParam);
    }
  }, [location]);

  const externalResources = [
    {
      id: "bapam",
      name: "BAPAM — British Association for Performing Arts Medicine",
      description: "L'ente di riferimento nel Regno Unito per la medicina delle arti performative. Fornisce guide cliniche, schede e supporto per la salute dei musicisti.",
      url: "https://www.bapam.org.uk"
    },
    {
      id: "tsp",
      name: "The Healthy Performance Shop / TSP",
      description: "Piattaforma ricca di risorse e infografiche dedicate alla preparazione atletica, posturale e mentale di artisti e musicisti.",
      url: "https://www.bapam.org.uk"
    },
    {
      id: "tame-beast",
      name: "Tame the Beast",
      description: "Risorsa d'eccellenza per comprendere la fisiologia del dolore cronico attraverso video interattivi, podcast ed spiegazioni accessibili basate sulle neuroscienze.",
      url: "https://www.tamethebeast.org"
    }
  ];

  return (
    <div className="toolkit-page">
      {/* Hero */}
      <section className="toolkit-hero section">
        <div className="container text-center">
          <span className="page-badge font-mono">[ ARCHIVIO PRATICHE DI MOVIMENTO ]</span>
          <h1 className="page-title">Analisi Biomeccanica delle Posture</h1>
          <p className="lead page-lead">
            Il database kinesiologico di HAPPY. Esplora le sequenze visive, i vettori articolari e i punti critici di carico registrati in collaborazione con i fisioterapisti.
          </p>
        </div>
      </section>

      {/* Main Archive Interactive Console */}
      <section className="archive-console-section section section-secondary">
        <div className="container">
          {/* Instrument Selectors Tab bar */}
          <div className="archive-selector-tabs">
            <button 
              className={`tab-btn font-mono ${selectedInstrument === 'violin' ? 'active' : ''}`}
              onClick={() => setSelectedInstrument('violin')}
            >
              VIOLINO // ARCO
            </button>
            <button 
              className={`tab-btn font-mono ${selectedInstrument === 'piano' ? 'active' : ''}`}
              onClick={() => setSelectedInstrument('piano')}
            >
              PIANOFORTE // TASTI
            </button>
            <button 
              className={`tab-btn font-mono ${selectedInstrument === 'flute' ? 'active' : ''}`}
              onClick={() => setSelectedInstrument('flute')}
            >
              FLAUTO TRAVERSO // FIATO
            </button>
          </div>

          <div className="archive-display-grid">
            {/* Left Column: Interactive Simulation Player */}
            <div className="archive-player-pane">
              <AnnotatedVideoPlayer instrument={selectedInstrument} />
            </div>

            {/* Right Column: Instrument Specs */}
            <div className="archive-specs-pane">
              <span className="specs-meta font-mono">TECHNICAL_REPORT // CLINICAL_DRAFT</span>
              
              {selectedInstrument === 'violin' && (
                <div className="specs-details">
                  <h3 className="specs-title">Mappatura del Violino</h3>
                  <p className="specs-text">
                    La tenuta dello strumento richiede asimmetria cervico-scapolare elevata. Il sollevamento del braccio sinistro a gravità forzata sollecita costantemente i trapezi e i deltoidi.
                  </p>
                  <div className="specs-table card">
                    <div className="table-row">
                      <span className="row-key font-mono">Sito Critico:</span>
                      <span className="row-val text-coral font-mono">Trapezio Superiore Sinistro</span>
                    </div>
                    <div className="table-row">
                      <span className="row-key font-mono">Angolo Critico:</span>
                      <span className="row-val font-mono">&lt; 70° gomito sinistro</span>
                    </div>
                    <div className="table-row">
                      <span className="row-key font-mono">Effetto Clinico:</span>
                      <span className="row-val font-mono">Sindrome miofasciale scapolare</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedInstrument === 'piano' && (
                <div className="specs-details">
                  <h3 className="specs-title">Mappatura del Pianoforte</h3>
                  <p className="specs-text">
                    L'asse orizzontale della tastiera impone la stabilizzazione dinamica del rachide. Il carico principale si concentra sui tendini degli estensori e dei flessori delle dita.
                  </p>
                  <div className="specs-table card">
                    <div className="table-row">
                      <span className="row-key font-mono">Sito Critico:</span>
                      <span className="row-val text-coral font-mono">Flessori dell'avambraccio</span>
                    </div>
                    <div className="table-row">
                      <span className="row-key font-mono">Angolo Critico:</span>
                      <span className="row-val font-mono">&lt; 155° flessione polso</span>
                    </div>
                    <div className="table-row">
                      <span className="row-key font-mono">Effetto Clinico:</span>
                      <span className="row-val font-mono">Tenosinovite degli estensori</span>
                    </div>
                  </div>
                </div>
              )}

              {selectedInstrument === 'flute' && (
                <div className="specs-details">
                  <h3 className="specs-title">Mappatura del Flauto</h3>
                  <p className="specs-text">
                    La rotazione laterale del capo durante la suonata ostacola l'estensione polmonare diaframmatica e costringe ad asimmetrie scapolari estreme che incidono sulla respirazione.
                  </p>
                  <div className="specs-table card">
                    <div className="table-row">
                      <span className="row-key font-mono">Sito Critico:</span>
                      <span className="row-val text-coral font-mono">Sternocleidomastoideo Destro</span>
                    </div>
                    <div className="table-row">
                      <span className="row-key font-mono">Angolo Critico:</span>
                      <span className="row-val font-mono">&gt; 15° rotazione cervicale</span>
                    </div>
                    <div className="table-row">
                      <span className="row-key font-mono">Effetto Clinico:</span>
                      <span className="row-val font-mono">Compressione del plesso brachiale</span>
                    </div>
                  </div>
                </div>
              )}

              <div className="specs-actions">
                <a href="/contatti#survey" className="btn btn-primary font-mono btn-large">
                  [ TRACCIA IL TUO STRUMENTO ]
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structure / Future Categories Section */}
      <section className="toolkit-categories-section section">
        <div className="container">
          <h2 className="section-title text-center">Struttura delle Schede Cliniche</h2>
          <p className="lead text-center mb-xl">
            L'HAPPY Toolkit finale si divide in tre sezioni complementari per unire didattica, famiglia e terapia.
          </p>

          <div className="grid-3 toolkit-categories-grid">
            <div className="card toolkit-category-card">
              <span className="cat-label font-mono">[ DIDATTICA ]</span>
              <h4>Materiali Insegnanti</h4>
              <p>Sequenze di esercizi di riscaldamento mirati per lo strumento e griglie di osservazione per monitorare le rigidità posturali in classe.</p>
            </div>
            <div className="card toolkit-category-card">
              <span className="cat-label font-mono">[ ERGONOMIA ]</span>
              <h4>Materiali Famiglie</h4>
              <p>Linee guida per la regolazione delle sedute a casa, posizionamento leggii e consigli pratici per l'attivazione delle micropause dello studio.</p>
            </div>
            <div className="card toolkit-category-card">
              <span className="cat-label font-mono">[ CLINICA ]</span>
              <h4>Schede Cliniche</h4>
              <p>Mappature kinesiologiche anatomiche, screening biomeccanici e letteratura epidemiologica per la fisioterapia e l'ergoterapia performativa.</p>
            </div>
          </div>
        </div>
      </section>

      {/* External Resources Section */}
      <section className="external-resources-section section section-secondary">
        <div className="container">
          <h2 className="section-title">Risorse Internazionali di Riferimento</h2>
          <p className="lead">
            In attesa delle schede stampabili HAPPY, ti invitiamo a consultare le seguenti risorse scientifiche mondiali sulla medicina dello spettacolo:
          </p>

          <div className="external-resources-list">
            {externalResources.map(res => (
              <div key={res.id} className="external-resource-row card">
                <div className="res-info">
                  <span className="res-meta font-mono">PLATFORM_LINK // ACCESSIBLE</span>
                  <h4>{res.name}</h4>
                  <p>{res.description}</p>
                </div>
                <a href={res.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary res-link-btn font-mono">
                  VISITA SITO &rarr;
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
