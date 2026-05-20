import React from 'react';

const Projects = () => {
  // Lista altamente selecionada com os portais públicos de Ribeirão das Neves e o Clube do Livro
  const projectsData = [
    {
      id: 1,
      title: "Site da Prefeitura de Ribeirão das Neves",
      description: "Contribuição no desenvolvimento e manutenção do portal oficial da cidade, focado em levar informação clara e serviços digitais para os cidadãos.",
      tags: ["Frontend", "Web", "Acessibilidade"],
      link: "https://ribeiraodasneves.mg.gov.br/",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Portal de Concursos da Prefeitura",
      description: "Criação do aplicativo web oficial para acompanhamento e consulta de concursos públicos do município de Ribeirão das Neves.",
      tags: ["React", "UI/UX", "Performance"],
      link: "https://concursos.ribeiraodasneves.mg.gov.br/",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Site do Clube do Livro",
      description: "Plataforma interativa criada para organizar cronogramas de leitura coletiva, sugerir novos títulos e integrar leitores em uma comunidade literária ativa e moderna.",
      tags: ["React", "TailwindCSS", "Vercel"],
      link: "https://prettygirlsbookclub.vercel.app/",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
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

              {/* Mantendo exclusivamente o botão principal de navegação oficial externa */}
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                  Ver Projeto <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
