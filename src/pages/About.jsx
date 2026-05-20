import React from 'react';

const About = () => {
  const skills = [
    'React', 'JavaScript', 'TypeScript', 'HTML/CSS', 
    'Node.js', 'Vite', 'Tailwind', 'Git', 'Figma'
  ];

  // Diferenciais técnicos criados sob medida para destacar sua liderança em TI
  const valueProps = [
    {
      title: "Soluções Sob Medida",
      description: "Desenvolvimento focado na necessidade real do projeto. Evito ferramentas desnecessárias ou complexidades artificiais (overengineering) para entregar código limpo, performático e de fácil manutenção futura."
    },
    {
      title: "Experiência em TI Pública",
      description: "Vivência prática no setor de tecnologia pública municipal. Isso traz facilidade nata para lidar com acessibilidade digital (e-Gov), conformidade e a entrega estável de sistemas sob prazos rígidos."
    },
    {
      title: "Estética & Usabilidade Premium",
      description: "Interfaces modernas que encantam no primeiro olhar. Foco total em conceitos Mobile-First, micro-animações fluidas e layouts interativos que tornam a experiência do usuário intuitiva e agradável."
    }
  ];

  return (
    <div className="section page-transition" style={{ padding: '5rem 0' }}>
      <div className="container">
        {/* Bloco Inicial de Sobre */}
        <div className="about-grid" style={{ marginBottom: '5rem' }}>
          {/* Moldura de Retrato Fotográfico Vertical (Proporção 3:4 elegante) */}
          <div className="about-image-container animate-up delay-1">
            <div className="glass-card" style={{ padding: '0', overflow: 'hidden', borderRadius: '24px', border: '1px solid var(--border-light)', display: 'flex', justifyContent: 'center', aspectRatio: '3 / 4', width: '100%', boxShadow: 'var(--shadow-md)' }}>
              <img 
                src="/perfil.jpg" 
                alt="Foto Profissional da Leandra Silva" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 15%' }} 
              />
            </div>
          </div>
          <div className="about-content animate-up delay-2">
            <h2>Sobre a <span className="text-gradient">Leandra</span></h2>
            <p style={{ marginBottom: '1.2rem' }}>
              Sou uma desenvolvedora focada no frontend com paixão por criar interfaces que combinam estética impecável com usabilidade excepcional. Acredito que o design não é apenas como algo parece, mas como funciona.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              Estou sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades. Minha jornada é movida pela curiosidade e pelo desejo de resolver problemas complexos através de código limpo e eficiente.
            </p>
            
            <h3 style={{ marginTop: '2rem', marginBottom: '1rem', color: 'var(--primary)' }}>Habilidades</h3>
            <div className="skills-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag" style={{ padding: '0.4rem 1rem', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--border-light)', fontSize: '0.9rem' }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Seção Criativa: Como Agrego Valor? */}
        <div className="hiring-section animate-up delay-3" style={{ marginTop: '3rem' }}>
          <div className="projects-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2>Como Agrego <span className="text-gradient">Valor?</span></h2>
            <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>O valor diferencial que agrego em cada projeto e equipe em que atuo.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {valueProps.map((prop, idx) => (
              <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', justify: 'center', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(217, 70, 239, 0.1)', color: 'var(--secondary)', fontWeight: 'bold' }}>
                    0{idx + 1}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>{prop.title}</h3>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
