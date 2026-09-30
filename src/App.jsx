import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Teachers from './pages/Teachers';
import Families from './pages/Families';
import HealthProfessionals from './pages/HealthProfessionals';
import Project from './pages/Project';
import Diaries from './pages/Diaries';
import Testimonials from './pages/Testimonials';
import Toolkit from './pages/Toolkit';
import TeamPartners from './pages/TeamPartners';
import Research from './pages/Research';
import News from './pages/News';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

// Global Styles
import './styles/global.css';

// Scroll to top helper
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is no hash (e.g. #survey), scroll to top
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      // If there is a hash, let the browser handle it or scroll to that element
      const id = hash.replace('#', '');
      const element = document.getElementById(id) || document.getElementById(`${id}-section`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="main-content-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/insegnanti" element={<Teachers />} />
          <Route path="/famiglie" element={<Families />} />
          <Route path="/professionisti" element={<HealthProfessionals />} />
          <Route path="/progetto" element={<Project />} />
          <Route path="/diaries" element={<Diaries />} />
          <Route path="/testimonianze" element={<Testimonials />} />
          <Route path="/toolkit" element={<Toolkit />} />
          <Route path="/team-partner" element={<TeamPartners />} />
          <Route path="/ricerca" element={<Research />} />
          <Route path="/news" element={<News />} />
          <Route path="/contatti" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
