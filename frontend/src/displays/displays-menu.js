import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ItemCard = (props) => (
	<button className="p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
		<div className="p-4 bg-gray-100 shadow-md rounded-lg" onClick={() => (window.location.pathname = "/manage/" + props.menu._id)}>
			<img
				src={props.menu.product_image}
				alt="Product Feature"
				className="rounded-md w-full h-32 sm:h-40 lg:h-48 object-cover"
			/>
			<h4 className="my-1 font-serif font-bold text-sm sm:text-base md:text-lg lg:text-xl">{props.menu.product_name}</h4>
			<hr className="my-2" />
			<p className="text-xs font-thin sm:text-sm md:text-base lg:text-lg flex">{props.menu.product_description}</p>
			<p className="my-2 font-mono font-semibold text-xs sm:text-sm md:text-base lg:text-lg flex justify-end">₱{props.menu.product_price}</p>
		</div>
	</button>
);

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: [],
			num: 1,
		};
	}

	componentDidMount() {
		axios
			.get("http://localhost:3001/menu")
			.then((res) => {
				this.setState({ menu: res.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	menuCardsList() {
		return this.state.menu.map(function (currentProduct, i) {
			return <ItemCard menu={currentProduct} key={i} />;
		});
	}

	render() {
		return (
			<div className="mb-6">
				<h1 className="text-center font-bold text-4xl">Le Menu</h1>
				<div className="flex flex-wrap content-center">{this.menuCardsList()}</div>
			</div>
		);
	}
}

export default Menu;
