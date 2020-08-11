import React, { Component } from "react";
import banner from "../images/deliveryBanner.jpg";

class Banner extends Component {
	render() {
		return (
			<div
				className="banner w-full bg-no-repeat bg-fixed bg-cover bg-center"
				style={{ backgroundImage: `url(${banner})` }}
			></div>
		);
	}
}

export default Banner;
