import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ItemCard = (props) => (
	<div className="card p-4 shadow-md w-64 rounded-md">
		<div className="container">
			{/* <p>{props.menu.product_image}</p> */}
			<img
				src="https://images.unsplash.com/photo-1591429640801-942538e4637d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
				alt="Chikin"
				className="rounded-md w-full"
			/>
			<h4 className="font-bold">{props.menu.product_name}</h4>
			<p>{props.menu.product_description}</p>
			<p>P{props.menu.product_price}</p>
			<p className="font-bold">
				<Link to={"/menu/" + props.menu._id}>
					<br />
					View
				</Link>
			</p>
		</div>
	</div>
);

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = { menu: [] };
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
			<div className="p-6">
				<h1 className="text-center font-bold text-4xl">Le Menu</h1>
				<div className="flex flex-wrap">{this.menuCardsList()}</div>
			</div>
		);
	}
}

export default Menu;
