import React from 'react';
import styled from 'styled-components';

interface TimelineItem {
  year: string;
  text: string;
}

const timelineData: TimelineItem[] = [
  { year: '2018', text: 'Foi quando eu terminei o ensino medio e comecei a foca estudar para passa no vestibular.' },
  { year: '2019', text: 'Estudava para passa em Ciência Da Computação e no mesmo tempo procurava um emprego.' },
  { year: '2021', text: 'Em 2021 foi onde comecei a ter interesse na programação, ficava vendo como era mais nunca foi atrás.' },
  { year: '2023', text: 'Em 2023 foi a onde comecei a ver aulas no YouTube, e também procura um cursos de programação e me aprofundei em Inglês..' },
];

const AboutContainer = styled.section`
  padding: 6rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem; 
  margin-bottom: 5rem; 
  text-align: left;
`;

const TimelineWrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  &::before {
    content: '';
    position: absolute;
    top: 44px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.line};
    width: calc(100% - (100% / 4));
    left: calc(100% / 8);
    z-index: 0;
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem 2rem;
    &::before {
      display: none;
    }
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 4rem;
    &::before {
      display: none;
    }
  }
`;

const TimelineItem = styled.div`
  position: relative;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 16px;
    height: 16px;
    background-color: ${({ theme }) => theme.colors.line};
    border-radius: 50%;
    z-index: 1;
  }

  @media (max-width: 576px) {
    text-align: left;
    &::after {
      display: none;
    }
  }
`;

const TimelineYear = styled.div`
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  margin-top: 0;

  @media (max-width: 576px) {
    margin-bottom: 0.75rem;
  }
`;

const TimelineText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.7;
  font-weight: bold;
  font-size: 1.25rem;
  text-align: center;
  display: inline-block;
  max-width: 230px;

  @media (max-width: 576px) {
    display: block;
    max-width: 100%;
  }
`;

const About: React.FC = () => {
  return (
    <AboutContainer id="about">
      <SectionTitle>Sobre mim</SectionTitle>
      <TimelineWrapper>
        {timelineData.map((item) => (
          <TimelineItem key={item.year}>
            <TimelineYear>{item.year}</TimelineYear>
            <TimelineText>{item.text}</TimelineText>
          </TimelineItem>
        ))}
      </TimelineWrapper>
    </AboutContainer>
  );
};

export default About;