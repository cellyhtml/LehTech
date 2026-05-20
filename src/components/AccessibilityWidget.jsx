import React, { useState, useEffect } from 'react';

const AccessibilityWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(100); // 100% da fonte base
  const [isContrast, setIsContrast] = useState(false);

  // Altera dinamicamente o tamanho da fonte base no elemento HTML
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  const toggleContrast = () => {
    setIsContrast(!isContrast);
    if (!isContrast) {
      document.body.classList.add('alto-contraste');
    } else {
      document.body.classList.remove('alto-contraste');
    }
  };

  const increaseFont = () => {
    if (fontSize < 140) setFontSize(prev => prev + 10);
  };

  const decreaseFont = () => {
    if (fontSize > 80) setFontSize(prev => prev - 10);
  };

  const resetFont = () => {
    setFontSize(100);
  };

  return (
    <div className="accessibility-widget-container">
      {/* Botão Redondo Flutuante */}
      <button 
        className={`accessibility-float-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Opções de Acessibilidade"
        title="Acessibilidade"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          width="28" 
          height="28" 
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6H11v6H9V9H3V7h18v2z"/>
        </svg>
      </button>

      {/* Painel que abre acima do botão */}
      {isOpen && (
        <div className="accessibility-float-panel glass" role="dialog" aria-label="Painel de Acessibilidade">
          <div className="panel-header">
            <h3>Acessibilidade</h3>
            <button className="close-panel-btn" onClick={() => setIsOpen(false)} aria-label="Fechar painel">&times;</button>
          </div>
          <div className="panel-body">
            <div className="panel-section">
              <h4>Visualização</h4>
              <button onClick={toggleContrast} className="panel-action-btn">
                {isContrast ? "🌓 Desativar Alto Contraste" : "🌓 Ativar Alto Contraste"}
              </button>
            </div>
            <div className="panel-section">
              <h4>Tamanho do Texto</h4>
              <div className="font-adjuster-grid">
                <button onClick={decreaseFont} className="panel-action-btn font-btn" aria-label="Diminuir texto">A-</button>
                <button onClick={resetFont} className="panel-action-btn font-btn" aria-label="Fonte normal">Normal</button>
                <button onClick={increaseFont} className="panel-action-btn font-btn" aria-label="Aumentar texto">A+</button>
              </div>
            </div>
            <div className="panel-section">
              <h4>Tradução de Libras</h4>
              <p>O site conta com tradutor para Língua Brasileira de Sinais. Clique abaixo para abrir o painel do VLibras:</p>
              <button 
                onClick={() => {
                  const vlibrasBtn = document.querySelector('[vw-access-button]');
                  if (vlibrasBtn) {
                    vlibrasBtn.click();
                    setIsOpen(false);
                  }
                }} 
                className="panel-action-btn vlibras-trigger"
              >
                Abrir VLibras 🤟
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessibilityWidget;
