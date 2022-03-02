import React from 'react';
import './ArticleLink.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ArticleLink(props) {
  const { article } = props;

  return (
    <Link className="article-link" to={`/blog/article/${article.linkName}`}>
      <article className="article-link__container">
        <img src={article.img} alt="" className="article-link__img" />
        <h2 className="article-link__name">{article.name}</h2>
        <p className="article-link__description">{article.description}</p>
      </article>
    </Link>
  );
}

ArticleLink.propTypes = {
  article: PropTypes.shape({
    _id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    linkName: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default ArticleLink;
