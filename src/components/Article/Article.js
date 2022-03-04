import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Article.css';
import PropTypes from 'prop-types';

function Article(props) {
  const { linkName } = useParams();

  const { articles } = props;

  const [thisArticle, setThisArticle] = React.useState({});
  const [content, setContent] = React.useState([]);

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
          content.map((element) => (
            <element.type>
              {element.text}
            </element.type>
          ))
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
