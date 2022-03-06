import React, { useEffect, useState } from 'react';
import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Blog from '../Blog/Blog';
import Article from '../Article/Article';
import Header from '../Header/Header';
import Home from '../Home/Home';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
import AddArticle from '../AddArticle/AddArticle';

function App() {
  const [articles, setArticles] = useState([]);
  const [projects, setProjects] = useState([]);

  function addArticle(title, img, description, linkName, texts) {
    setArticles([{
      name: title,
      description,
      img,
      linkName,
      content: texts,
    }, ...articles]);
  }

  useEffect(() => {
    setArticles([
      {
        name: 'Article',
        description: 'Lorem ipsum',
        img: 'https://media.istockphoto.com/photos/young-woman-reading-the-news-on-a-modern-tablet-computer-while-in-picture-id1177502660?b=1&k=20&m=1177502660&s=170667a&w=0&h=ROub8oDtheyx3xtHMjtU2FV6ZC7g2iSGX2qxme6388w=',
        linkName: 'article1',
        content: [
          {
            type: 'h2',
            text: 'Here is heading!',
          },
          {
            type: 'p',
            text: 'Paragraph 1',
          },
          {
            type: 'p',
            text: 'Paragraph 2',
          },
        ],
      },
      {
        name: 'Article',
        description: 'Lorem ipsum',
        img: 'https://media.istockphoto.com/photos/young-woman-reading-the-news-on-a-modern-tablet-computer-while-in-picture-id1177502660?b=1&k=20&m=1177502660&s=170667a&w=0&h=ROub8oDtheyx3xtHMjtU2FV6ZC7g2iSGX2qxme6388w=',
        linkName: 'article2',
        content: [
          {
            type: 'h2',
            text: 'Here is heading!',
          },
          {
            type: 'p',
            text: 'Paragraph 1',
          },
          {
            type: 'p',
            text: 'Paragraph 2',
          },
        ],
      },
      {
        name: 'Article',
        description: 'Lorem ipsum',
        img: 'https://media.istockphoto.com/photos/young-woman-reading-the-news-on-a-modern-tablet-computer-while-in-picture-id1177502660?b=1&k=20&m=1177502660&s=170667a&w=0&h=ROub8oDtheyx3xtHMjtU2FV6ZC7g2iSGX2qxme6388w=',
        linkName: 'article3',
        content: [
          {
            type: 'h2',
            text: 'Here is heading!',
          },
          {
            type: 'p',
            text: 'Paragraph 1',
          },
          {
            type: 'p',
            text: 'Paragraph 2',
          },
        ],
      },
      {
        name: 'New article',
        description: 'Description new article',
        img: 'https://thumbs.dreamstime.com/z/article-reading-16383133.jpg',
        linkName: 'new-article',
        content: [
          {
            type: 'h2',
            text: 'Here is heading!',
          },
          {
            type: 'p',
            text: 'Paragraph 1',
          },
          {
            type: 'p',
            text: 'Paragraph 2',
          },
        ],
      },
      {
        name: 'Barcelona',
        description: 'My travel to Barcelona',
        img: 'https://lh3.googleusercontent.com/aopfdWgAbydWD1kYlBMTM5wlVKlzU-lyTIyoDq9csvqLxC69Pw0Ba7cJnq-UShsZ2buIAHU_g3jX_ZoawyvaGft7oXhaCYr9Bb9gryHnmmtzrL0Ssb0pil3v0VXXRb4_c9bZLS_F1yR1I2KQGsv0IQwIXbyAMr5SPylJJsQJHgKZUVo8Yib3_NTrzTwmtbG1XH4Z2A5vMiccVAM9-YpGc4dp5nYTXb9IEjj6il8WtNVUrqjiXpdAI8EM6SX2pIeg_qiciqg-TObG1eHBKIzxELMKtGgXOXvqCzvIzpT15xczALsSmJsQTCE3NfLt9iiZJdZYOGC872Ohdpi5j4QSSvZQAaRahfW_3rXu5nwnMqWQ3H02H3QuyLKnGOYEqU7Z16EQeZdxiV6EVsYUKPkXYCRrmtkGyDcKZ0_zkwXEPLYXcTsX0Tb1_wQjeEOA5PmT9PFABP3tX0v-bcZ_oly3kOP2atOIWcnMstu28iYLcXYRKjKf4e1BcLAhcc4pmdEd63jAD_8gYSocCgqJ0c6VXKQa3paQfSCkJrjjDg4wBKFAu4y-IbF1fknGH8ZNDGqhdBzn2r4k38sW2MjEEg8XK8diDQW4utHhbIOh79tZmMk59HaiH6UZ5AG3g8QbiEi-Gacll0qdcjfwGgvB5ycPRwhOyfh3gU8fa3WXpNPa-4glOI30FjAUsoJacmWkGjT9hs-SxEJFD3e8_Rse3bkr3b1l=w507-h898-no?authuser=1',
        linkName: 'barcelona',
        content: [
          {
            type: 'h2',
            text: 'Travel!',
          },
          {
            type: 'p',
            text: 'Text 1',
          },
          {
            type: 'p',
            text: 'Text 2',
          },
          {
            type: 'img',
            text: 'yandex.ru',
          },
        ],
      },
    ].reverse());
    setProjects([
      // {
      //   name: 'Movies Explorer',
      //   description: 'Searching and saving movies',
      //   img: 'https://imgur.com/4wb6GH8.png',
      //   link: 'https://max76667.movies.nomoredomains.club',
      //   linkName: 'Save some movies (Demo)',
      //   repoLink: 'https://github.com/maximka76667/movies-explorer-frontend',
      // },
      {
        name: 'Mesto',
        description: 'Social media for beatiful photos',
        img: 'https://imgur.com/ICNuiBr.png',
        link: 'https://maximka76667.github.io/react-mesto-auth',
        linkName: 'Post photos (Demo)',
        repoLink: 'https://github.com/maximka76667/react-mesto-api-full',
      },
      {
        name: 'Kinopoisk',
        description: 'Webpage for searching information about popular movies',
        img: 'https://imgur.com/3NwgDu2.png',
        link: 'https://maximka76667.github.io/kinopoisk',
        linkName: 'See project (Demo)',
        repoLink: 'https://github.com/maximka76667/kinopoisk',
      },
      {
        name: 'Tic Tac Toe',
        description: 'Tic Tac Toe with singleplayer (against my bot) and multiplayer',
        img: 'https://imgur.com/DWIac4v.png',
        link: 'https://maximka76667.github.io/tic-tac-toe',
        linkName: 'Tic Tac Toe (Demo)',
        repoLink: 'https://github.com/maximka76667/tic-tac-toe',
      },
      {
        name: 'Dino Game',
        description: 'Clone of Google Dino Game',
        img: 'https://imgur.com/QzzWbGh.png',
        link: 'https://maximka76667.github.io/dino-game',
        linkName: 'Play it again?! (Demo)',
        repoLink: 'https://github.com/maximka76667/dino-game',
      },
      {
        name: 'CalcuTADOR',
        description: 'My calculator',
        img: 'https://imgur.com/ydtfSkV.png',
        link: 'https://maximka76667.github.io/calcutador',
        linkName: 'Calculate (Demo)',
        repoLink: 'https://github.com/maximka76667/calcutador',
      },
      {
        name: 'Pass Gen',
        description: 'Password generator',
        img: 'https://imgur.com/LrrnwHU.png',
        link: 'https://maximka76667.github.io/pass-gen',
        linkName: 'Generate password (Demo)',
        repoLink: 'https://github.com/maximka76667/pass-gen',
      },
    ]);
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route path="/blog">
            <Route path="/blog" element={<Blog articles={articles} />} />
            <Route path="/blog/article/:linkName" element={<Article articles={articles} />} />
            {
              // eslint-disable-next-line
              <Route path="/blog/create-article" element={<AddArticle addArticle={addArticle} />} />
            }
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
