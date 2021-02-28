import React, { Component } from "react";
import banner from "../images/deliveryBanner.png";

class Banner extends Component {
	render() {
		return (
			<div
				className="h-40 sm:h-48 md:h-56 lg:h-64 w-full min-w-full bg-no-repeat bg-fixed bg-cover bg-top"
				style={{ backgroundImage: `url(${banner})` }}
			></div>
		);
	}
}

export default Banner;
