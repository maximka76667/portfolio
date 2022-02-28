import React from 'react';
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

function App() {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    setArticles([
      {
        _id: 321,
        name: 'Article',
        description: 'Lorem ipsum',
        img: 'https://media.istockphoto.com/photos/young-woman-reading-the-news-on-a-modern-tablet-computer-while-in-picture-id1177502660?b=1&k=20&m=1177502660&s=170667a&w=0&h=ROub8oDtheyx3xtHMjtU2FV6ZC7g2iSGX2qxme6388w=',
        linkName: 'article',
        content: '<h2>Here is heading!</h2><p>Paragraph 1<p><p>Paragraph 2<p>',
      },
      {
        _id: 105,
        name: 'New article',
        description: 'Description new article',
        img: 'https://thumbs.dreamstime.com/z/article-reading-16383133.jpg',
        linkName: 'new-article',
        content: '<h2>Here is heading!</h2><p>Paragraph 1<p><p>Paragraph 2<p>',
      },
      {
        id: 110,
        name: 'Barcelona',
        description: 'My travel to Barcelona',
        img: 'https://lh3.googleusercontent.com/aopfdWgAbydWD1kYlBMTM5wlVKlzU-lyTIyoDq9csvqLxC69Pw0Ba7cJnq-UShsZ2buIAHU_g3jX_ZoawyvaGft7oXhaCYr9Bb9gryHnmmtzrL0Ssb0pil3v0VXXRb4_c9bZLS_F1yR1I2KQGsv0IQwIXbyAMr5SPylJJsQJHgKZUVo8Yib3_NTrzTwmtbG1XH4Z2A5vMiccVAM9-YpGc4dp5nYTXb9IEjj6il8WtNVUrqjiXpdAI8EM6SX2pIeg_qiciqg-TObG1eHBKIzxELMKtGgXOXvqCzvIzpT15xczALsSmJsQTCE3NfLt9iiZJdZYOGC872Ohdpi5j4QSSvZQAaRahfW_3rXu5nwnMqWQ3H02H3QuyLKnGOYEqU7Z16EQeZdxiV6EVsYUKPkXYCRrmtkGyDcKZ0_zkwXEPLYXcTsX0Tb1_wQjeEOA5PmT9PFABP3tX0v-bcZ_oly3kOP2atOIWcnMstu28iYLcXYRKjKf4e1BcLAhcc4pmdEd63jAD_8gYSocCgqJ0c6VXKQa3paQfSCkJrjjDg4wBKFAu4y-IbF1fknGH8ZNDGqhdBzn2r4k38sW2MjEEg8XK8diDQW4utHhbIOh79tZmMk59HaiH6UZ5AG3g8QbiEi-Gacll0qdcjfwGgvB5ycPRwhOyfh3gU8fa3WXpNPa-4glOI30FjAUsoJacmWkGjT9hs-SxEJFD3e8_Rse3bkr3b1l=w507-h898-no?authuser=1',
        linkName: 'barcelona',
        content: '<h2>Travel</h2><p>Text</p>',
      },
    ].reverse());
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog">
            <Route path="/blog/" element={<Blog articles={articles} />} />
            <Route path="/blog/article/:linkName" element={<Article articles={articles} />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
