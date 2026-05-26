import React, { useState } from 'react';

const Contact = () => {
  // 🔴 AJUSTE O SEU NÚMERO AQUI: Código do País (55) + DDD (2 dígitos) + Número (9 digits)
  // Sem espaços, parênteses ou traços.
  const whatsappNumber = "5531994938213"; 

  // Mensagem padrão convidativa que será pré-preenchida ao clicar no botão
  const defaultMessage = "Olá, Leandra! Acessei seu portfólio e gostaria de conversar sobre novos projetos e oportunidades.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  // Estado para feedback do e-mail copiado
  const [copied, setCopied] = useState(false);
  const emailProfissional = "leandra.marcely@hotmail.com"; // Substitua caso prefira outro

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailProfissional);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="section page-transition">
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="contact-container animate-up delay-1" style={{ maxWidth: '600px', width: '100%', textAlign: 'center' }}>
          <h2>Vamos <span className="text-gradient">Conversar?</span></h2>
          {/* Frase estratégica profissional e focada no mercado corporativo privado */}
          <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
            Estou à disposição para colaborar no desenvolvimento de produtos digitais de alto impacto, arquiteturas frontend escaláveis e soluções web sob medida para o seu negócio.
          </p>

          {/* Cartão de Ação Direta para WhatsApp e E-mail */}
          <div className="glass-card animate-up delay-2" style={{ padding: '3rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            {/* Ícone estilizado com micro-animação */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(217, 70, 239, 0.1)', color: 'var(--secondary)', fontSize: '3rem' }}>
              💬
            </div>

            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.8rem', color: 'var(--primary)' }}>Entre em contato imediato</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                Seja para fechar um projeto, tirar dúvidas ou propor parcerias públicas/privadas, escolha o canal que preferir.
              </p>
            </div>

            <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Botão WhatsApp */}
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-primary" 
                style={{ width: '100%', padding: '1.1rem 2rem', fontSize: '1.1rem', gap: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
              >
                Conversar no WhatsApp <span>→</span>
              </a>

              {/* Botão Copiar E-mail */}
              <button 
                onClick={handleCopyEmail}
                className="btn btn-outline glass"
                style={{ width: '100%', padding: '1.1rem 2rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', cursor: 'pointer' }}
              >
                {copied ? "✓ E-mail Copiado!" : "Copiar E-mail Profissional"}
              </button>
            </div>

            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              Ou envie diretamente para: <strong>{emailProfissional}</strong>
            </span>
          </div>

          {/* Redes Sociais Alternativas com os links reais de alta autoridade da Leandra */}
          <div className="contact-socials animate-up delay-3" style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
            <a href="https://github.com/cellyhtml" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              GH
            </a>
            {/* Link oficial do LinkedIn corrigido direcionando direto ao perfil profissional */}
            <a href="https://br.linkedin.com/in/leandra-silva-marcely" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              IN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
