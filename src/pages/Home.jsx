import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="section hero-section page-transition">
      <div className="container">
        <h1 className="hero-title animate-up delay-1">
          Olá, eu sou a <span className="text-gradient">Leandra</span> <br />
          e crio experiências memoráveis
        </h1>
        <p className="hero-subtitle animate-up delay-2">
          Desenvolvedora Frontend especializada em construir interfaces modernas, acessíveis (e-Gov) e de alto desempenho que transformam problemas complexos em sistemas simples e bonitos.
        </p>
        
        {/* Botoes de Ação */}
        <div className="hero-buttons animate-up delay-3" style={{ marginBottom: '4rem' }}>
          <Link to="/projects" className="btn btn-primary">
            Ver Projetos
          </Link>
          <Link to="/contact" className="btn btn-outline glass">
            Entrar em Contato
          </Link>
        </div>

        {/* Métricas Rápidas de Autoridade */}
        <div className="stats-grid animate-up delay-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem', paddingTop: '3rem', borderTop: '1px solid var(--border-light)' }}>
          <div>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '0.2rem' }}>+300k</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Cidadãos impactados por soluções web</p>
          </div>
          <div>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '0.2rem' }}>100%</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Acessibilidade e conformidade digital (e-MAG)</p>
          </div>
          <div>
            <h3 style={{ fontSize: '2.5rem', color: 'var(--secondary)', marginBottom: '0.2rem' }}>Modern</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Arquiteturas limpas em React e Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
