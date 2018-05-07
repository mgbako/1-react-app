import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keywords: ""
    };
  }

  inputChange(event) {
    this.setState({ keywords: event.target.value });
    this.props.newsSearch(event.target.value);
  }
  render() {
    return (
      <header>
        <h2>Header</h2>
        <input onChange={this.inputChange.bind(this)} />
        <p>Input Value: {this.state.keywords}</p>
      </header>
    );
  }
}

export default Header;
