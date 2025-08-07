import React from 'react';
import styled from 'styled-components';
import FigmaIcon from '../icons/iconFigma.svg';
import GitHubIcon from '../icons/iconGithub.svg';
import LinkedInIcon from '../icons/iconLinkedin.svg';

const FooterContainer = styled.footer`
  padding: 5rem 0 3rem 0;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.5rem;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const ContactItem = styled.div``;

const ContactLabel = styled.h4`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ContactInfo = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  font-weight: 600;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  a {
    color: ${({ theme }) => theme.colors.text};
    transition: color 0.3s;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <ContactDetails>
        <ContactItem>
          <ContactLabel>Meu contato:</ContactLabel>
          <ContactInfo>11 9 9469-4678</ContactInfo>
        </ContactItem>
        <ContactItem>
          <ContactLabel>Email:</ContactLabel>
          <ContactInfo>carlosprofi82@.com</ContactInfo>
        </ContactItem>
      </ContactDetails>
      <SocialLinks>
        <a href="https://github.com/CabrQW" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src={GitHubIcon} style={{ width: '50px', height: '50px' }} />
        </a>
        <a href="https://www.linkedin.com/in/carlos-eduardo-a971501a5/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <img src={LinkedInIcon} style={{ width: '50px', height: '50px' }} />
        </a>
        <a href="https://www.figma.com/design/O2j7uVVhXUnV6dadZc2MMw/Desafio-03--Desenvolva-um-portf%C3%B3lio-com-React-hooks?node-id=0-1&p=f&t=0LzW0dth4h1yjpEr-0" target="_blank" rel="noopener noreferrer" aria-label="Figma">
          <img src={FigmaIcon} style={{ width: '50px', height: '50px' }} />
        </a>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;