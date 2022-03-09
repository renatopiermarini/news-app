import React from "react";
import "./article.css";

export const Article = ({ rights, author, title, summary, link, media }) => {
  return (
    <div className="article">
      {author && <p>{author}</p>}
      <h2>{title}</h2>
      {media && <img src={media} className="imagen" />}
      <p className="description">{summary}</p>
      {rights && <p>{"Rights: " + rights}</p>}
      <div className="button-div">
        <a href={link} target="_blank">
          Read article
        </a>
      </div>
    </div>
  );
};
