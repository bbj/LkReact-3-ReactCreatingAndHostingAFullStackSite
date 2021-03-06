import React from "react";
import articleContent from './article-content';
import ArticleList from "../components/ArticleList";

const ArticlesListPage = () => {
  return (
    <>
      <h1>Articles</h1>
      <ArticleList articles={articleContent} />
    </>
  );
}

export default ArticlesListPage;