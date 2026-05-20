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
          Sou uma desenvolvedora apaixonada por construir interfaces bonitas, modernas e funcionais que proporcionam a melhor experiência para os usuários.
        </p>
        <div className="hero-buttons animate-up delay-3">
          <Link to="/projects" className="btn btn-primary">
            Ver Projetos
          </Link>
          <Link to="/contact" className="btn btn-outline glass">
            Entrar em Contato
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
