import React from 'react';
import { useParams } from 'react-router-dom';
import './Article.css';
import PropTypes from 'prop-types';

function Article(props) {
  const { linkName } = useParams();

  const { articles } = props;

  const [articleName, setArticleName] = React.useState('');
  const [articleContent, setArticleContent] = React.useState('');

  React.useEffect(() => {
    articles.forEach((article) => {
      if (article.linkName.toString() === linkName) {
        setArticleName(article.name);
        setArticleContent(`<img src="${article.img}"/>${article.content}`);
      }
    });
  }, [linkName, articles]);

  return (
    <>
      <h1>
        {articleName}
        {' '}
        {linkName}
      </h1>
      <div className="article__content" dangerouslySetInnerHTML={{ __html: articleContent }} />
    </>
  );
}

Article.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
    linkName: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};

export default Article;
