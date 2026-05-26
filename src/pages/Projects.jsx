import React from 'react';

const Projects = () => {
  // Lista altamente selecionada com as novas imagens locais e profissionais
  const projectsData = [
    {
      id: 1,
      title: "Portal Oficial de Ribeirão das Neves",
      description: "Responsável pelo desenvolvimento frontend e conformidade de acessibilidade digital (padrões e-MAG / WCAG). Garantia de experiência fluida e inclusiva para mais de 300 mil cidadãos.",
      tags: ["React", "Acessibilidade", "e-Gov", "SEO"],
      link: "https://ribeiraodasneves.mg.gov.br/",
      image: "/prefeitura_projeto.png"
    },
    {
      id: 2,
      title: "Portal de Concursos Municipais",
      description: "Criação de interface de usuário (UI) focada em extrema performance. Otimizado para suportar milhares de acessos simultâneos durante inscrições de processos públicos, sem perda de estabilidade.",
      tags: ["React", "UI/UX Premium", "Otimização", "Mobile-First"],
      link: "https://concursos.ribeiraodasneves.mg.gov.br/",
      image: "/concursos_projeto.png"
    },
    {
      id: 3,
      title: "Plataforma Pretty Girls Book Club",
      description: "Desenvolvimento completo da plataforma interativa para comunidade literária. Integração de interfaces modernas, cronogramas de leitura coletiva e animações fluidas para retenção de usuários.",
      tags: ["React", "TailwindCSS", "Vercel", "Design Criativo"],
      link: "https://prettygirlsbookclub.vercel.app/",
      image: "/bookclub_projeto.png"
    }
  ];

  return (
    <div className="section page-transition">
      <div className="container">
        <div className="projects-header animate-up delay-1">
          <h2>Meus <span className="text-gradient">Projetos</span></h2>
          <p style={{ color: 'var(--text-muted)' }}>Uma seleção dos meus trabalhos recentes e experiências.</p>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div 
              key={project.id} 
              className={`project-card glass-card animate-up delay-${(index % 4) + 1}`}
            >
              <div className="project-img">
                <img src={project.image} alt={`Imagem do projeto ${project.title}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              
              <div className="skills-container" style={{ marginBottom: '1.5rem', marginTop: '0' }}>
                {project.tags.map(tag => (
                  <span key={tag} className="skill-tag" style={{ padding: '0.2rem 0.8rem', fontSize: '0.8rem' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
