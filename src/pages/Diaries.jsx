import React from 'react';
import CTASection from '../components/CTASection';
import './Diaries.css';

export default function Diaries() {
  return (
    <div className="diaries-page">
      {/* Hero */}
      <section className="diaries-hero section">
        <div className="container text-center">
          <span className="page-badge font-mono">[ DATO LOGGING DIARIO ]</span>
          <h1 className="page-title">HAPPY Diaries</h1>
          <p className="lead page-lead">
            Un registro propriocettivo digitale per tracciare i tempi di studio, i carichi di stanchezza muscolare e l'efficacia delle routine di riscaldamento.
          </p>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="diaries-details section section-secondary">
        <div className="container">
          <div className="grid-2 diaries-grid">
            
            {/* What is it */}
            <div className="card diary-info-card">
              <span className="card-tag font-mono">[ ANALISI // DIARI ]</span>
              <h3>Che cosa sono</h3>
              <p>
                Gli HAPPY Diaries sono logbook digitali compilabili da smartphone in meno di 2 minuti. Registrano i dati relativi ai tempi di pratica dello strumento, alla comparsa di dolorabilità muscolo-scheletrica e all'integrazione di pause attive.
              </p>
            </div>

            {/* Who can participate */}
            <div className="card diary-info-card">
              <span className="card-tag font-mono">[ UTENTI // LIVE ]</span>
              <h3>Chi compila i diari</h3>
              <p>
                Il tracciamento propriocettivo richiede un'osservazione incrociata tra:
              </p>
              <ul className="diary-list">
                <li><strong>Allievi & Famiglie:</strong> per registrare gli orari di studio e i riscaldamenti svolti a casa.</li>
                <li><strong>Insegnanti:</strong> per annotare il livello di affaticamento e le rigidità posturali visibili in aula.</li>
                <li><strong>Terapisti:</strong> per monitorare il recupero funzionale in seguito a percorsi ergoterapici.</li>
              </ul>
            </div>

            {/* How it works */}
            <div className="card diary-info-card">
              <span className="card-tag font-mono">[ METODO // LOG ]</span>
              <h3>Flusso di Registrazione</h3>
              <div className="diary-steps font-mono">
                <div className="step-item"><span className="step-num">01/</span> REGISTRAZIONE UTENTE</div>
                <div className="step-item"><span className="step-num">02/</span> RILASCIO NOTIFICA LOG</div>
                <div className="step-item"><span className="step-num">03/</span> INSERIMENTO DATI IN 2 MIN</div>
              </div>
            </div>

            {/* Why participate */}
            <div className="card diary-info-card">
              <span className="card-tag font-mono">[ RICERCA // DATI ]</span>
              <h3>Utilità per la Ricerca</h3>
              <p>
                I dati raccolti in forma totalmente anonima e cifrata consentono al team di ricerca SUPSI e Conservatorio della Svizzera italiana di individuare la correlazione tra ore di studio complessive e l'insorgere di micro-contratture, modellando la prevenzione.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mock digital diaries application display */}
      <section className="diaries-mock-ui section" id="diaries">
        <div className="container">
          <div className="mock-ui-wrapper card">
            <div className="mock-ui-header font-mono">
              <div className="mock-dots">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <span className="mock-title">HAPPY_DIARIES_CONSOLE // STAGING</span>
            </div>
            
            <div className="mock-ui-body">
              <div className="mock-form-header">
                <h3 className="font-mono">PORTALE DI REGISTRAZIONE</h3>
                <p className="font-mono text-muted">Stato: PRONTO PER L'INSERIMENTO DATI // FASE 2</p>
              </div>
              
              <div className="mock-form-fields">
                <div className="form-group">
                  <label className="form-label font-mono">RUOLO_UTENTE.select()</label>
                  <select className="form-control font-mono" defaultValue="">
                    <option value="" disabled>Seleziona il profilo di appartenenza...</option>
                    <option value="docente">Insegnante di musica</option>
                    <option value="genitore">Famiglia / Genitore</option>
                    <option value="sanitario">Professionista della salute</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label font-mono">EMAIL_DIRETTORE.input()</label>
                  <input type="email" className="form-control font-mono" placeholder="esempio@email.com" />
                </div>

                <button className="btn btn-primary btn-block font-mono" onClick={(e) => { e.preventDefault(); alert("Grazie! Pre-registrazione salvata per la Fase 2."); }}>
                  [ SOTTOSCRIVI CANALE LOGBOOK ]
                </button>
                
                <p className="mock-disclaimer font-mono text-center text-muted">
                  *I diari digitali HAPPY e le routine di log automatico saranno attivati nel corso delle HAPPY Weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
