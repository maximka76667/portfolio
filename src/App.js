import React from 'react';
import './App.css';
import image from './images/article-img.jpg'

function App() {

  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    setArticles([
      {
        name: "Article",
        description: "Lorem ipsum",
        img: "https://media.istockphoto.com/photos/young-woman-reading-the-news-on-a-modern-tablet-computer-while-in-picture-id1177502660?b=1&k=20&m=1177502660&s=170667a&w=0&h=ROub8oDtheyx3xtHMjtU2FV6ZC7g2iSGX2qxme6388w="
      },
      {
        name: "New article",
        description: "Description new article",
        img: "https://thumbs.dreamstime.com/z/article-reading-16383133.jpg"        
      }
    ].reverse())
  }, [])


  return (
    <div className="app">
      <header className="header">

      </header>
      <main className="content">
        <h1>My blog</h1>
        <section className="articles">
          {
            articles.map((article) => {
              return (
                <a class="article-link" href="#">
                  <article className="article">
                    <img src={article.img} alt="" className="article__img" />
                    <h2 className="article__name">{article.name}</h2>
                    <p className="article__description">{article.description}</p>
                  </article>
                </a>
              )
            })
          }
        </section>
      </main>
    </div>
  );
}

export default App;
