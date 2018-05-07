import React from "react";

const NewsListItem = ({ item }) => {
  return (
    <div className="news_item">
      <h2 className="news_title">{item.title}</h2>
      <p className="news_content">{item.feed}</p>
    </div>
  );
};

export default NewsListItem;
