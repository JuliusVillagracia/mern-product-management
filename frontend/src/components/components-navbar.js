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
								(window.location.pathname === "/manage"
									? "bg-blue-500 text-white"
									: "bg-gray-200 text-black")
							}
							to="/manage"
						>
							Manage
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
							Contact Us
						</Link>
					</li>
				</ul>
			</nav >

			// <nav class="bg-gray-800">
			// 	<div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
			// 		<div class="relative flex items-center justify-between h-16">
			// 			<div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
			// 				<button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
			// 					<span class="sr-only">Open main menu</span>

			// 					<svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
			// 						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
			// 					</svg>

			// 					<svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
			// 						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			// 					</svg>
			// 				</button>
			// 			</div>
			// 			<div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
			// 				<div class="flex-shrink-0 flex items-center">
			// 					<img class="block lg:hidden h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
			// 					<img class="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
			// 				</div>
			// 			</div>
			// 			<div class="hidden sm:block sm:ml-6">
			// 				<div class="flex space-x-4">
			// 					<a href="#" class="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Dashboard</a>
			// 					<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Team</a>
			// 					<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
			// 					<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Calendar</a>
			// 				</div>
			// 			</div>
			// 		</div>

			// 	</div>

			// 	<div class="sm:hidden" id="mobile-menu">
			// 		<div class="px-2 pt-2 pb-3 space-y-1">

			// 			<a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
			// 			<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
			// 			<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
			// 			<a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
			// 		</div>
			// 	</div>
			// </nav>
		);
	}
}

export default Navbar;
