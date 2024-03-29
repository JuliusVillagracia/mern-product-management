import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Components
import Banner from "./components/components-banner";
import Navbar from "./components/components-navbar";

// Displays
import Home from "./displays/displays-home";
import Contact from "./displays/displays-contact";
import Catalogue from "./displays/displays-menu";
import ProdDetails from "./displays/displays-prodDetails";
import ProdUpdate from "./displays/displays-prodUpdate";
import ProdCreate from "./displays/displays-prodCreate";

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
					<Route path="/menu/:id/update" component={ProdUpdate} />
					<Route path="/menu/create" component={ProdCreate} />
					<Route path="/contactUs" component={Contact} />
				</span>
			</Router>
		);
	}
}

export default App;
