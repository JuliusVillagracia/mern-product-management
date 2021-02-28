import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import menuIcon from "../images/menu-icon.png";

class Navbar extends Component {
	toggleMenu() {
		if (document.getElementById('nav').classList.value.includes('hidden')) {
			document.getElementById('nav').classList.remove('hidden');
		} else {
			document.getElementById('nav').classList.add('hidden');
		}
	}

	render() {
		return (
			<nav className="sm:flex p-2 bg-gray-200">
				<div className="flex">
					<button className="sm:hidden">
						< img
							src={menuIcon}
							alt="Cravings Logo"
							className="p-2 w-8 h-8"
							onClick={() => this.toggleMenu()}
						/>
					</button>
					<div className="w-full justify-center flex">
						< img
							src={logo}
							alt="Cravings Logo"
							className="sm:mr-6 w-8 h-8"
						/>
					</div>
				</div>

				<ul id="nav" className="mt-2 mx-8 sm:mt-0 sm:mx-0 sm:flex space-y-2 sm:space-y-0">
					<li className="sm:mr-3">
						<Link
							className={
								"font-mono font-semibold text-xs sm:text-sm block border-2 border-white rounded py-1 px-3 " +
								(window.location.pathname === "/"
									? "bg-blue-500 text-white"
									: "bg-gray-200 text-black")
							}
							to="/"
						>
							Home
						</Link>
					</li>

					<li className="sm:mr-3">
						<Link
							className={
								"font-mono font-semibold text-xs sm:text-sm block border-2 border-white rounded py-1 px-3 " +
								(window.location.pathname === "/menu"
									? "bg-blue-500 text-white"
									: "bg-gray-200 text-black")
							}
							to="/menu"
						>
							Menu
						</Link>
					</li>

					<li className="sm:mr-3">
						<Link
							className={
								"font-mono font-semibold text-xs sm:text-sm block border-2 border-white rounded py-1 px-3 " +
								(window.location.pathname === "/contactUs"
									? "bg-blue-500 text-white"
									: "bg-gray-200 text-black")
							}
							to="/contactUs"
						>
							Contact Me
						</Link>
					</li>
				</ul>
			</nav >
		);
	}
}

export default Navbar;
