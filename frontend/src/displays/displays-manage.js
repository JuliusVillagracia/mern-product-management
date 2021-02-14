import React, { Component } from "react";
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
				<Link to={"/manage/" + props.menu._id}>
					<br />
					View
				</Link>
			</p>
		</div>
	</div >
);

class Manage extends Component {
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

	addCard() {
		axios
			.post("http://localhost:3001/menu", {
				"product_image": "",
				"product_name": "Test Product",
				"product_description": "Test Description",
				"product_price": 100
			})
			.then((res) => {
				axios
					.get("http://localhost:3001/menu")
					.then((res) => {
						this.setState({ menu: res.data });
					})
					.catch(function (error) {
						console.log(error);
					});
			})
			.catch(function (error) {
				console.log("error");
				console.log(error);
			});
	}

	removeCard() {
		axios
			.delete(`http://localhost:3001/menu/${this.state.menu[this.state.menu.length - 1]._id}`)
			.then((res) => {
				axios
					.get("http://localhost:3001/menu")
					.then((res) => {
						this.setState({ menu: res.data });
					})
					.catch(function (error) {
						console.log(error);
					});
			})
			.catch(function (error) {
				console.log("error");
				console.log(error);
			});
	}

	updateCard() {
		axios
			.put(`http://localhost:3001/menu/${this.state.menu[this.state.menu.length - 1]._id}`, {
				"product_name": "Edited Product",
				"product_description": "Edit Description",
				// "product_price": 1000
			})
			.then((res) => {
				axios
					.get("http://localhost:3001/menu")
					.then((res) => {
						this.setState({ menu: res.data });
					})
					.catch(function (error) {
						console.log(error);
					});
			})
			.catch(function (error) {
				console.log("error");
				console.log(error);
			});
	}

	render() {
		return (
			<div className="p-6">
				<h1 className="text-center font-bold text-4xl">Le Menu</h1>
				<div className="flex flex-wrap">{this.menuCardsList()}</div>
				<div className="p-6">
					<button className="text-center text-2xl" onClick={() => this.addCard()}> Add </button>
				</div>
				<div className="p-6">
					<button className="text-center text-2xl" onClick={() => this.removeCard()}> Delete </button>
				</div>
				<div className="p-6">
					<button className="text-center text-2xl" onClick={() => this.updateCard()}> Update </button>
				</div>
			</div>
		);
	}
}

export default Manage;
