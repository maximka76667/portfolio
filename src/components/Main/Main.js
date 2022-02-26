import { Link } from "react-router-dom";

function Main(props) {
  return (
    <>
      <h1>My blog</h1>
      <section className="articles">
        {
          props.articles.map((article) => {
            return (
              <Link className="article-link" to={`/article/${article._id}`} key={article._id}>
                <article className="article">
                  <img src={article.img} alt="" className="article__img" />
                  <h2 className="article__name">{article.name}</h2>
                  <p className="article__description">{article.description}</p>
                </article>
              </Link>
            )
          })
        }
      </section>
    </>
  )
}

export default Main;