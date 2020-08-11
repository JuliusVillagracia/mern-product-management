import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light flex p-2 bg-gray-200">
				<img
					src={logo}
					width="35"
					height="35"
					alt="Cravings Logo"
					className="navbar-brand mr-6"
				/>

				<ul className="navbar-nav flex">
					<li className="mr-3">
						<Link
							className={
								"nav-link inline-block border border-white rounded py-1 px-3 " +
								(window.location.pathname === "/"
									? "bg-blue-500 text-white"
									: "bg-gray-200 text-black")
							}
							to="/"
						>
							Home
						</Link>
					</li>

					<li className="mr-3">
						<Link
							className={
								"nav-link inline-block border border-white rounded py-1 px-3 " +
								(window.location.pathname === "/catalogue"
									? "bg-blue-500 text-white"
									: "bg-gray-200 text-black")
							}
							to="/catalogue"
						>
							Catalogue
						</Link>
					</li>

					<li className="mr-3">
						<Link
							className={
								"nav-link inline-block border border-white rounded py-1 px-3 " +
								(window.location.pathname === "/contactUs"
									? "bg-blue-500 text-white"
									: "bg-gray-200 text-black")
							}
							to="/contactUs"
						>
							Contact us
						</Link>
					</li>

					<li className="mr-3 absolute right-0">
						<Link
							className={
								"nav-link inline-block border border-white rounded py-1 px-3 " +
								(window.location.pathname === "/account"
									? "bg-blue-500 text-white"
									: "bg-gray-200 text-black")
							}
							to="/account"
						>
							Account
						</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navbar;
