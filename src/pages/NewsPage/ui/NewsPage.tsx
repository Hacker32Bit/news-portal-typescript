import React from "react";
import { useParams } from "react-router-dom";
import { NewsListProps } from "components/NewsList/NewsList.interface";
import styles from "./NewsPage.module.css";

const NewsPage: React.FC<NewsListProps> = ({ news }) => {
  const { id } = useParams();

  const articleId = Number(id);

  if (isNaN(articleId)) {
    console.log("Parameter error");
  }

  const article = news.find((item) => item.id === articleId);

  const comments = article?.comments;

  console.log(comments)

  if (!article) {
    console.log("Article not found");
  }

  return (
    <div className={styles.news}>
      <h1>{article?.title}</h1>
      <div className={styles.card}>
        <div className={styles.image}>
          <img src={article?.image} alt={article?.title} />
        </div>
        <div className={styles.content}>
          <p>{article?.content}</p>
          <span>{article?.publishDate}</span>
        </div>
      </div>
      <div className={styles.comments}>
        {
          
        }
      </div>
    </div>
  );
};

export default NewsPage;
