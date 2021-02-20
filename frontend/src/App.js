import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Banner from "./components/components-banner";
import Navbar from "./components/components-navbar";

// Displays
import Home from "./displays/displays-home";
import Catalogue from "./displays/displays-menu";
import Manage from "./displays/displays-manage";
import ProdDetails from "./displays/displays-prodDetails";
import ProdUpdate from "./displays/displays-prodUpdate";
import Contact from "./displays/displays-contact";

class App extends Component {
	render() {
		return (
			<Router>
				<span>
					<Route component={Banner} />
					<Route component={Navbar} />

					<br />

					<Route path="/" exact component={Home} />
					<Route path="/menu" component={Catalogue} />
					<Route path="/menu/:id" component={ProdDetails} />
					<Route path="/manage" component={Manage} />
					<Route path="/manage/:id" component={ProdDetails} />
					<Route path="/manage/:id/update" component={ProdUpdate} />
					<Route path="/contactUs" component={Contact} />
				</span>
			</Router>
		);
	}
}

export default App;
