import React, { Component } from "react";
import NavBar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Intro/>
      </div>
    );
  }
}

export default App;
