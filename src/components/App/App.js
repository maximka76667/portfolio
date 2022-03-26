import React, { useEffect, useState } from 'react';
import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
// import Blog from '../Blog/Blog';
// import Article from '../Article/Article';
// import colors from 'nice-color-palettes';
import { random } from '@georgedoescode/generative-utils';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
// import AddArticle from '../AddArticle/AddArticle';
import { getProjects } from '../../utils/api';
import themes from '../../utils/themes';

function App() {
  // const [articles, setArticles] = useState([]);
  const [projects, setProjects] = useState([]);
  // const [theme, setTheme] = useState({});
  const [palette, setPalette] = useState([]);

  // function addArticle(title, img, description, linkName, texts) {
  //   setArticles([{
  //     name: title,
  //     description,
  //     img,
  //     linkName,
  //     content: texts,
  //   }, ...articles]);
  // }

  useEffect(() => {
    // setArticles(getArticles.reverse());
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
          {/* <Route path="/blog">
            <Route path="/blog" element={<Blog articles={articles} />} />
            <Route path="/blog/article/:linkName" element={<Article articles={articles} />} />
            {
              // eslint-disable-next-line
              <Route path="/blog/create-article" element={<AddArticle addArticle={addArticle} />} />
            }
          </Route> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
