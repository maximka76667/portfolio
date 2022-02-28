import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Blog(props) {
  const { articles } = props;
  return (
    <div className="blog">
      <h1 className="blog__heading">My blog</h1>
      <section className="articles">
        {
          articles.map((article) => (
            <Link className="article-link" to={`/blog/article/${article.linkName}`} key={article._id}>
              <article className="article">
                <img src={article.img} alt="" className="article__img" />
                <h2 className="article__name">{article.name}</h2>
                <p className="article__description">{article.description}</p>
              </article>
            </Link>
          ))
        }
      </section>
    </div>
  );
}

Blog.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    linkName: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};

export default Blog;
