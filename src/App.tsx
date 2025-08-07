import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GloblaStyles';

const AppContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <main>
          <Hero />
          <Projects />
          <About />
        </main>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;