import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Main from '../Main/Main';
import Article from '../Article/Article';

function App() {

  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    setArticles([
      {
        _id: 321,
        name: "Article",
        description: "Lorem ipsum",
        img: "https://media.istockphoto.com/photos/young-woman-reading-the-news-on-a-modern-tablet-computer-while-in-picture-id1177502660?b=1&k=20&m=1177502660&s=170667a&w=0&h=ROub8oDtheyx3xtHMjtU2FV6ZC7g2iSGX2qxme6388w=",
        linkName: "article",
        content: "<h2>Here is heading!</h2><p>Paragraph 1<p><p>Paragraph 2<p>"
      },
      {
        _id: 105,
        name: "New article",
        description: "Description new article",
        img: "https://thumbs.dreamstime.com/z/article-reading-16383133.jpg",
        linkName: "new-article",
        content: "<h2>Here is heading!</h2><p>Paragraph 1<p><p>Paragraph 2<p>"
      }
    ].reverse())
  }, [])


  return (
    <div className="app">
      <header className="header">

      </header>
      <main className="content">
        <h1 className="content__heading">My blog</h1>
        <BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
          <Routes>
            <Route path="/" element={<Main articles={articles} />} />
            <Route path="/article/:linkName" element={<Article articles={articles} />} />
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
