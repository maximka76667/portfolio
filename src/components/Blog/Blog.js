import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import ArticleLink from '../ArticleLink/ArticleLink';
import './Blog.css';

function Blog(props) {
  const { articles } = props;
  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <div className="blog">
        <h1 className="blog__heading">My blog</h1>
        <section className="blog__articles">
          {
            articles.map((article) => (
              <ArticleLink article={article} key={article.linkName} />
            ))
          }
        </section>
      </div>
    </>
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
