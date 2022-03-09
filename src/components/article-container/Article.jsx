import React from "react";
import "./article.css";
import "animate.css";

export const Article = ({
  author,
  title,
  description,
  url,
  urlToImage,
  date,
}) => {
  return (
    <div className="article animate__fadeIn">
      {author && <p>{author}</p>}
      <h2>{title}</h2>
      <img src={urlToImage} className="imagen" />
      <p>{description}</p>
      <div className="button-div">
        <a href={url} target="_blank">
          Read article
        </a>
      </div>
    </div>
  );
};
