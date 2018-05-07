import React from "react";
import NewsListItem from "./news_list_item";

const NewsItems = props => {
  const items = props.news.map(item => {
    return <NewsListItem key={item.id} item={item} />;
  });

  return <div className="news_items">{items}</div>;
};

export default NewsItems;
