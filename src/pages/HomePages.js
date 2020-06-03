import React, { Component } from "react";

import Header from "parts/Header";
import News from "parts/News";

export default class HomePages extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <News />
      </>
    );
  }
}
