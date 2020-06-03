import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "assets/scss/style.scss";
import HomePage from "pages/HomePages";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={HomePage}></Route>
      </Router>
    </div>
  );
}

export default App;
