import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Testimonials.css';

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState('all');

  const mockTestimonials = [
    {
      id: "t1",
      category: "teacher",
      author: "Insegnante di Violino",
      context: "Scuola di Musica del Luganese",
      quote: "Nelle mie classi ho notato che i bambini tendono a irrigidirsi molto sulle spalle quando imparano le prime note. Spesso non sappiamo come spiegare l'allineamento corporeo senza annoiarli. Il progetto HAPPY ci darà schede visive utilissime.",
      date: "Maggio 2026"
    },
    {
      id: "t2",
      category: "family",
      author: "Mamma di un allievo di Pianoforte",
      context: "Conservatorio della Svizzera italiana",
      quote: "Mio figlio di 9 anni adora suonare, ma a volte dopo mezz'ora di studio a casa si lamenta del polso. Avendo una guida chiara, potrei aiutarlo a capire se la sedia è all'altezza giusta prima che insorga il dolore.",
      date: "Giugno 2026"
    },
    {
      id: "t3",
      category: "health",
      author: "Fisioterapista Specialista",
      context: "Studio privato, Lugano",
      quote: "Nel mio studio vedo regolarmente giovani musicisti che presentano asimmetrie e dolori posturali già a 12 anni. La prevenzione primaria a questa età è cruciale: è molto più facile insegnare un'abitudine corretta che correggerne una sbagliata.",
      date: "Maggio 2026"
    },
    {
      id: "t4",
      category: "teacher",
      author: "Docente di Flauto Traverso",
      context: "Scuola di Musica Locarno",
      quote: "La respirazione e la posizione asimmetrica del flauto creano carichi particolari. Spero che HAPPY possa fornire una scheda di riscaldamento mirata per i fiati, per sciogliere il collo prima di suonare.",
      date: "Giugno 2026"
    }
  ];

  const filteredTestimonials = activeFilter === 'all' 
    ? mockTestimonials 
    : mockTestimonials.filter(t => t.category === activeFilter);

  return (
    <div className="testimonials-page">
      {/* Hero */}
      <section className="testimonials-hero section">
        <div className="container">
          <h1 className="page-title">Testimonianze</h1>
          <p className="lead page-lead">
            Le voci di chi vive la musica ogni giorno. Raccogliamo storie, esperienze e riflessioni per costruire una prevenzione che nasca dalla realtà quotidiana.
          </p>
          
          <div className="interim-notice card">
            <h3>Diventa protagonista del progetto</h3>
            <p>
              Le testimonianze dei partecipanti reali verranno pubblicate progressivamente a partire dalla Fase 2. Nel frattempo, puoi essere tra le prime persone a partecipare al progetto HAPPY raccontando la tua storia nel sondaggio iniziale.
            </p>
            <Link to="/contatti" className="btn btn-accent mt-sm">
              Partecipa al sondaggio ora
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Filter Grid */}
      <section className="testimonials-list section section-secondary">
        <div className="container">
          <h2 className="section-title text-center">Contributi dal Territorio</h2>
          <p className="lead text-center mb-xl">
            Di seguito, alcuni esempi di contributi e riflessioni raccolti durante i contatti preliminari e le fasi pilota.
          </p>

          {/* Category Filters */}
          <div className="filter-buttons-container">
            <button 
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              Tutti i contributi
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'teacher' ? 'active' : ''}`}
              onClick={() => setActiveFilter('teacher')}
            >
              Insegnanti
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'family' ? 'active' : ''}`}
              onClick={() => setActiveFilter('family')}
            >
              Famiglie
            </button>
            <button 
              className={`filter-btn ${activeFilter === 'health' ? 'active' : ''}`}
              onClick={() => setActiveFilter('health')}
            >
              Professionisti della salute
            </button>
          </div>

          {/* Grid of Testimonial Cards */}
          <div className="grid-2 testimonials-grid-cards">
            {filteredTestimonials.map(t => (
              <div key={t.id} className="testimonial-card card">
                <div className="quote-icon">“</div>
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-author-meta">
                  <div className="author-details">
                    <span className="author-name">{t.author}</span>
                    <span className="author-context">{t.context}</span>
                  </div>
                  <div className="testimonial-footer-tag">
                    <span className={`category-badge badge-${t.category}`}>
                      {t.category === 'teacher' && 'Insegnante'}
                      {t.category === 'family' && 'Famiglia'}
                      {t.category === 'health' && 'Professionista'}
                    </span>
                    <span className="testimonial-date">{t.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <p className="text-center text-muted">Nessuna testimonianza in questa categoria al momento.</p>
          )}
        </div>
      </section>
    </div>
  );
}
