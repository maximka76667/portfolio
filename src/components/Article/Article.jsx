import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Article.css';
import PropTypes from 'prop-types';

function Article(props) {
  const { linkName } = useParams();

  const { articles } = props;

  const [thisArticle, setThisArticle] = useState({});
  const [content, setContent] = useState([]);

  useEffect(() => {
    articles.forEach((article) => {
      if (article.linkName.toString() === linkName) {
        setThisArticle(article);
        setContent(article.content);
      }
    });
  }, [linkName, articles]);

  return (
    <article className="article">
      <h1 className="article__heading">
        {thisArticle.name}
      </h1>
      <img className="article__img" src={thisArticle.img} alt={thisArticle.name} />
      <div className="article__content">
        {
          content.map((contentElement, index) => {
            if (contentElement.type === 'img') {
              // eslint-disable-next-line
              return <img key={index} src={contentElement.text} />;
            }
            return (
              // eslint-disable-next-line
              <contentElement.type key={index}>
                {contentElement.text}
              </contentElement.type>
            );
          })
        }
      </div>
    </article>
  );
}

Article.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    linkName: PropTypes.string,
    content: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      text: PropTypes.string,
    })),
  })).isRequired,
};

export default Article;
