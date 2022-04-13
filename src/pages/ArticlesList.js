import React from "react";
import { Link } from 'react-router-dom';
import articleContent from './article-content';

const ArticlesList = () => {
  return (
    <>
      <h1>Articles</h1>
      {articleContent.map((article, index) => (
        <Link className="article-list-item" to={`/article/${article.name}`}>
          <h3 key={index}>{article.title}</h3>
          <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
      ))}
    </>
  );
}

export default ArticlesList;