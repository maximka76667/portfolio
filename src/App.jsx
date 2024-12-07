import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { random } from '@georgedoescode/generative-utils';
import { HelmetProvider } from 'react-helmet-async';
import { Header, Footer } from './components';
import { Home, About, Projects } from './pages';
import { getProjects } from './data/projects';
import themes from './data/themes';
import CursorContext from './contexts/CursorContext';

function App() {
  const palette = themes[random(0, 9, true)];

  return (
    <HelmetProvider>
      <CursorContext.Provider value={palette[1]}>
        <div
          className="app"
          style={{
            '--color-0': palette[0],
            '--color-1': palette[1],
            '--color-2': palette[2],
            '--color-3': palette[3],
            '--color-4': palette[4]
          }}
        >
          <Header />
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CursorContext.Provider>
    </HelmetProvider>
  );
}

export default App;
