import React from "react";
import { useHistory } from "react-router-dom";
import "./App.css";

import Content from "./layout/Content";
import Header from "./layout/Header";

function App() {
  let history = useHistory();
  window.route = route => {
    history.push(route);
  };

  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
