import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  text-align: left;
  padding: 6rem 0;
  max-width: 650px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  white-space: nowrap;
  font-weight: 600;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
  line-height: 1.6;
  margin-left: 4rem;
`;

const GradientButton = styled.a`
  display: inline-block;
  padding: 12px 35px;
  border-radius: 50px;
  border: none;
  color: white;
  font-weight: 600;
  cursor: pointer;
  background: linear-gradient(90deg, #945DD6, #6978D1, #13ADC7);
  transition: background-position 0.5s ease;
  margin-left: 6rem;
`;

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <Title> Olá! Me Chamo Carlos Eduardo </Title>
      <Subtitle>
      Atualmente estou cursando Análise e Desenvolvimento de Sistemas (ADS), com o objetivo de me tornar um 
      desenvolvedor full stack. Sou apaixonado por tecnologia e estou sempre buscando aprender e 
      evoluir dentro do universo do desenvolvimento web.
      </Subtitle>
      <GradientButton href="#projects">Saber mais</GradientButton>
    </HeroContainer>
  );
};

export default Hero;