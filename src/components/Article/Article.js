import React from "react";
import { useParams } from "react-router-dom";

function Article(props) {
  const { id } = useParams();

  const [articleName, setArticleName] = React.useState('');

  React.useEffect(() => {
    props.articles.forEach(article => {
      if (article._id.toString() === id) {
        setArticleName(article.name);
      }
    })
  }, [id, props.articles]);

  return (
    <h1>{articleName} {id}</h1>
  )
}

export default Article;