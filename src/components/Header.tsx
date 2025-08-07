import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '../icons/iconGithub.svg';
import LinkedInIcon from '../icons/iconLinkedin.svg';

const HeaderContainer = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0;
`;

const Nav = styled.nav`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2.5rem;
  
  a {
    margin-right: 2.5rem;
    font-size: 1.25rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s;
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  a {
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s;

    &:hover {
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div style={{ width: '80px' }} />
      <Nav>
        <a href="#projects">Projetos</a>
        <a href="#technologies">Tecnologias</a>
        <a href="#about">Sobre mim</a>
      </Nav>
      <Socials>
        <a href="https://github.com/CabrQW" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src={GitHubIcon} style={{ width: '30px', height: '30px' }} />
        </a>
        <a href="https://www.linkedin.com/in/carlos-eduardo-a971501a5/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src={LinkedInIcon} style={{ width: '30px', height: '30px' }} />
        </a>
      </Socials>
    </HeaderContainer>
  );
};

export default Header;