import React from 'react';

export default function Privacy() {
  return (
    <div className="privacy-page section">
      <div className="container" style={{ maxWidth: '800px', padding: 'var(--spacing-xl) 0' }}>
        <h1 className="page-title" style={{ textAlign: 'left' }}>Informativa sulla Privacy</h1>
        <p className="lead" style={{ margin: 'var(--spacing-md) 0' }}>
          La tua privacy è fondamentale per noi. In conformità con la Legge federale svizzera sulla protezione dei dati (LPD) e il Regolamento generale sulla protezione dei dati (GDPR), ti informiamo su come gestiamo i tuoi dati nel progetto HAPPY.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-lg)', marginTop: 'var(--spacing-xl)' }}>
          <section>
            <h3 style={{ color: 'var(--primary-dark)', marginBottom: 'var(--spacing-xs)' }}>1. Titolare del Trattamento</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Il titolare del trattamento dei dati raccolti tramite questo sito e i relativi moduli di sondaggio è la Scuola Universitaria Professionale della Svizzera italiana (SUPSI), con sede a Manno, Svizzera.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--primary-dark)', marginBottom: 'var(--spacing-xs)' }}>2. Dati Raccolti e Finalità</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-xs)' }}>
              Raccogliamo dati esclusivamente per scopi di ricerca scientifica e miglioramento didattico:
            </p>
            <ul style={{ paddingLeft: 'var(--spacing-lg)', color: 'var(--text-muted)' }}>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}><strong>Sondaggi online:</strong> Tutti i sondaggi sono completati in forma rigorosamente anonima. I dati vengono aggregati per analisi statistiche.</li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}><strong>Moduli di contatto:</strong> I dati inseriti nel modulo di contatto (nome, email) sono utilizzati esclusivamente per rispondere alle vostre richieste di informazione e non vengono ceduti a terzi.</li>
              <li style={{ marginBottom: 'var(--spacing-xs)' }}><strong>HAPPY Diaries:</strong> Le registrazioni e i diari digitali sono protetti da credenziali d'accesso individuali e crittografati sul server SUPSI.</li>
            </ul>
          </section>

          <section>
            <h3 style={{ color: 'var(--primary-dark)', marginBottom: 'var(--spacing-xs)' }}>3. Diritti dell'Interessato</h3>
            <p style={{ color: 'var(--text-muted)' }}>
              Hai il diritto di richiedere l'accesso, la rettifica, la cancellazione o la limitazione del trattamento dei tuoi dati personali in qualsiasi momento, inviando una comunicazione scritta al team di progetto all'indirizzo email <a href="mailto:cinzia.cruder@supsi.ch">cinzia.cruder@supsi.ch</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
