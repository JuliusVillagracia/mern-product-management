import React, { Component } from "react";
import banner from "../images/deliveryBanner.jpg";

class Banner extends Component {
	render() {
		return (
			<div
				className="banner w-full min-w-full bg-no-repeat bg-fixed bg-cover bg-center"
				style={{ backgroundImage: `url(${banner})` }}
			></div>
			// <img
			// 	src={banner}
			// 	alt="Site Banner"
			// 	className="w-full h-64 object-cover object-center"
			// />
		);
	}
}

export default Banner;
