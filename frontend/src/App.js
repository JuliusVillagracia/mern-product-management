import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Banner from "./components/components-banner";
import Navbar from "./components/components-navbar";

// Displays
import Home from "./displays/displays-home";
import Catalogue from "./displays/displays-catalogue";
import Contact from "./displays/displays-contact";

class App extends Component {
  render() {
    return (
      <Router>
        <span>
          <Route component={Banner} />
          <Route component={Navbar} />

          <br />

          <div class="flex">
            <Route path="/" exact component={Home} />
            <Route path="/catalogue" component={Catalogue} />
            <Route path="/contactUs" component={Contact} />
          </div>
        </span>
      </Router>
    );
  }
}

export default App;
