import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';
import blog from '../../public/blog.jpeg';
import pyn from '../../public/Projeto-com-react.jpeg';
import landipage from '../../public/landipage.jpeg';
import tarefas from '../../public/api-tempo.jpeg';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const projectsData: Project[] = [
  { id: 1, title: 'BLOG', description: 'Página de um blog responsivo para desenvolvedores e criado para o curso da DNC.', imageUrl: blog, link: 'https://blogrtecnolo.netlify.app/' },
  { id: 2, title: 'Landing Page - Arquitetura ', description: 'Desenvolvimento de uma Landig Page para uma empresa de arquitetura para captura de Leads utilizando  REACT.JS ,HTML e CSS.', imageUrl: pyn, link: 'https://projeto-em-react-neon.vercel.app/' },
  { id: 3, title: 'Projeto landing page', description: 'Projeto feito só com HTML, CSS, JS.', imageUrl: landipage, link: 'https://incomparable-fox-fc7026.netlify.app/' },
  { id: 4, title: 'Api para consultar temperatura e cep ', description: 'API criada para consultar Rua, Bairro, Cidade de acordo com o CEP informado e também a temperatura do momento de acordo com a Latitude e Longitude informada.', imageUrl: tarefas, link: 'https://dncweather.vercel.app/' },
];

const ProjectsContainer = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: left;
  font-weight: 600;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10rem;
  margin-left: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <ProjectsContainer id="projects">
      <SectionTitle>Projetos</SectionTitle>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;