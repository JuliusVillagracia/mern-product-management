import React, { Component } from "react";

class Home extends Component {
	render() {
		return (
			<div>
				<h1 className="mb-4 text-blue-900 font-sans font-black text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
					MERN Product Management
				</h1>

				<div className="space-y-6 px-10">
					<div className="rounded-lg bg-gray-100 border-gray-200 border-2 ">
						<h2 className="px-2 bg-gray-300 rounded-tl-md rounded-tr-md font-sans font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
							About
						</h2>

						<div className="px-4 py-2 space-y-4">
							<div>
								<h3 className="font-sans font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
									What it is
								</h3>
								<hr />
								<p className="font-mono text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
									The full-stack web application is built with the MERN Stack. It focuses on the implementation of a RESTful API.
								</p>
							</div>

							<div>
								<h3 className="font-sans font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
									What it does
								</h3>
								<hr />
								<p className="font-mono text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
									The site lets the user manage a database of products, this includes creating, reading, updating, and deleting product records.
								</p>
							</div>

							<div>
								<h3 className="font-sans font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
									What it uses
								</h3>
								<hr />
								<p className="font-mono text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
									MongoDB v4.4.3^
									<br />
									Express v4.17.1^
									<br />
									React v16.13.1^
									<br />
									Nodejs v12.18.3^
								</p>
							</div>
						</div>
					</div>

					<div className="rounded-lg bg-gray-100 border-gray-200 border-2">
						<h2 className="px-2 bg-gray-300 rounded-tl-md rounded-tr-md font-sans font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
							Executing Locally
						</h2>

						<div className="px-4 py-2 space-y-4">
							<div>
								<h3 className="font-sans font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
									Database
								</h3>
								<hr />
								<p className="font-mono text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
									1. On a terminal, run `mongod --dbpath filepath/backend/db`
								</p>
							</div>

							<div>
								<h3 className="font-sans font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
									Server Side
								</h3>
								<hr />
								<p className="font-mono text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
									2. On another terminal, run `node server.js` at `filepath/backend/`
								</p>
							</div>

							<div>
								<h3 className="font-sans font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
									Client Side
								</h3>
								<hr />
								<p className="font-mono text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
									3. On one more terminal, run `yarn start` at `filepath/frontend/`
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
