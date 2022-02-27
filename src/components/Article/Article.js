import React from "react";
import { useParams } from "react-router-dom";
import './Article.css';

function Article(props) {
  const { linkName } = useParams();

  const [articleName, setArticleName] = React.useState('');
  const [articleContent, setArticleContent] = React.useState('');

  React.useEffect(() => {
    props.articles.forEach(article => {
      if (article.linkName.toString() === linkName) {
        setArticleName(article.name);
        setArticleContent(`<img src="${article.img}"/>${article.content}`);
      }
    })
  }, [linkName, props.articles]);

  return (
    <>
      <h1>{articleName} {linkName}</h1>
      <div className="article__content" dangerouslySetInnerHTML={{ __html: articleContent }}>
      </div>
    </>
  )
}

export default Article;