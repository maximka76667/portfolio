import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { random } from '@georgedoescode/generative-utils';
import { Header, Footer } from './components/index';
import { Home, About, Projects } from './pages/index';
import { getProjects } from './helpers/api';
import themes from './helpers/themes';

function App() {
  const [projects, setProjects] = useState([]);
  const [palette, setPalette] = useState([]);

  useEffect(() => {
    setProjects(getProjects);
    setPalette(themes[random(0, 9, true)]);
  }, []);

  return (
    <div
      className="app"
      style={
        {
          '--color-0': palette[0],
          '--color-1': palette[1],
          '--color-2': palette[2],
          '--color-3': palette[3],
          '--color-4': palette[4],
        }
      }
    >
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
