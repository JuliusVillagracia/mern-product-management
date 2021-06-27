import React, { Component } from "react";
import githubIcon from "../images/github-icon.png";
import linkedinIcon from "../images/linkedin-icon.png";

class Contact extends Component {
	render() {
		return (
			<div className="px-6 space-y-10">
				<div>
					<div className="font-sans font-black text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
						Check My Other Projects
					</div>
					<div className="text-center justify-center content-center flex">
						<button className="flex bg-gray-200 shadow-md rounded-lg border-2 border-blue-900" onClick={() => window.location.assign("https://github.com/JuliusVillagracia")}>
							< img
								src={githubIcon}
								alt="Github Icon"
								className="m-1 w-6 h-6"
							/>
							<div className="p-1 font-mono align-middle text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
								github.com/JuliusVillagracia
							</div>
						</button>
					</div>
				</div>

				<div>
					<div className="font-sans font-black text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
						Connect With Me
					</div>
					<div className="text-center justify-center content-center flex">
						<button className="flex bg-gray-200 shadow-md rounded-lg border-2 border-blue-900" onClick={() => window.location.assign("https://linkedin.com/in/JuliusVillagracia")}>
							< img
								src={linkedinIcon}
								alt="LinkedIn Icon"
								className="m-1 w-6 h-6"
							/>
							<div className="p-1 font-mono align-middle text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
								linkedin.com/in/JuliusVillagracia
							</div>
						</button>
					</div>
				</div>

			</div >
		);
	}
}

export default Contact;
