import React from "react";
//! moment.js for  format dates
import moment from "moment";

const Article = ({ title, snippet, date, length }) => {
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>data</span>
        <span>
          {moment(date).format("MMMM Do, ddd YYYY, h:mm:ss a")} min read
        </span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
