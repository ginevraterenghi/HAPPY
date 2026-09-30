import React, { useState } from 'react';
import { newsData } from '../data/news';
import './News.css';

export default function News() {
  const [selectedPost, setSelectedPost] = useState(null);

  const openPostDetail = (post) => {
    setSelectedPost(post);
  };

  const closePostDetail = () => {
    setSelectedPost(null);
  };

  return (
    <div className="news-page">
      {/* Hero */}
      <section className="news-hero section">
        <div className="container text-center">
          <span className="page-badge font-mono">[ AGGIORNAMENTI DI PROGETTO ]</span>
          <h1 className="page-title">HAPPY News</h1>
          <p className="lead page-lead">
            Resta aggiornato sui workshop di co-design, sulle acquisizioni dell'Archivio Gesti e sulle scoperte cliniche del progetto.
          </p>
        </div>
      </section>

      {/* Grid of news cards */}
      <section className="news-grid-section section section-secondary">
        <div className="container">
          <div className="grid-3 news-cards-grid">
            {newsData.map((post) => (
              <div key={post.id} className="card news-card" onClick={() => openPostDetail(post)}>
                <div className="news-card-header font-mono">
                  <span className="news-date">[ DATE: {post.date.replace(/\//g, '.')} ]</span>
                  <span className="news-label">// RELEASE</span>
                </div>
                <h3 className="news-card-title">{post.title}</h3>
                <p className="news-card-excerpt">{post.excerpt}</p>
                <button className="news-read-more-btn font-mono">
                  [ LEGGI ARTICOLO ] &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Modal/Detail Drawer */}
      {selectedPost && (
        <div className="news-modal-overlay" onClick={closePostDetail}>
          <div className="news-modal-content card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn font-mono" onClick={closePostDetail} aria-label="Chiudi articolo">
              [X]
            </button>
            <div className="modal-header">
              <span className="news-date font-mono">[ DATE: {selectedPost.date.replace(/\//g, '.')} ]</span>
              <h2 className="glow-text">{selectedPost.title}</h2>
            </div>
            <div className="modal-body">
              <p className="lead">{selectedPost.excerpt}</p>
              <div className="modal-full-text">
                {selectedPost.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-primary font-mono" onClick={closePostDetail}>
                [ CHIUDI TERMINALE ]
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
