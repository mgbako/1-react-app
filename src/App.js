import React, { Component } from "react";
import Header from "./components/header";
import NewsItems from "./components/news_items";
import JSON from "./018 db.json";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: JSON,
      filtered: JSON
    };
  }

  filterNews(keywords) {
    let filtered = this.state.news.filter(item => {
      return item.title.toLowerCase().indexOf(keywords.toLowerCase()) > -1;
    });

    this.setState({ filtered });
  }

  render() {
    return (
      <div className="App">
        <Header newsSearch={keywords => this.filterNews(keywords)} />
        <NewsItems news={this.state.filtered} />
      </div>
    );
  }
}

export default App;
