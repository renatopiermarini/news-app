import React from "react";
import "./article.css";

export const Article = ({ rights, author, title, summary, link, media }) => {
  return (
    <div className="article">
      {author && <p>{author}</p>}
      <h2>{title}</h2>
      {media && <img src={media} className="imagen" />}
      <p>{summary}</p>
      <p>{rights}</p>
      <div className="button-div">
        <a href={link} target="_blank">
          Read article
        </a>
      </div>
    </div>
  );
};
