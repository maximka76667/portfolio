import React, { useEffect, useState } from 'react';
import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
// import Blog from '../Blog/Blog';
// import Article from '../Article/Article';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
// import AddArticle from '../AddArticle/AddArticle';
import { getProjects } from '../../utils/api';

function App() {
  // const [articles, setArticles] = useState([]);
  const [projects, setProjects] = useState([]);

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
  }, []);

  return (
    <div className="app">
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
