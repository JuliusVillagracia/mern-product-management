import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "react-modal";

class Details extends Component {
	constructor(props) {
		super(props);
		this.state = { menu: [] };
	}

	componentDidMount() {
		this.fetchDb();
	}

	fetchDb() {
		axios
			.get("http://localhost:3001/menu/" + this.props.match.params.id)
			.then((res) => {
				this.setState({ menu: res.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	removeCard() {
		axios
			.delete(`http://localhost:3001/menu/${this.state.menu._id}`)
			.then((res) => {
				window.location.pathname = "/manage";
			})
			.catch(function (error) {
				console.log("error");
				console.log(error);
			});
	}

	updateCard() {
		axios
			.put(`http://localhost:3001/menu/${this.state.menu._id}`, {
				"product_image": "https://media1.giphy.com/media/PmuRN2xj0tfwuTPpIu/giphy.gif?cid=ecf05e47us9m25w57cq5p6qjt63iutw08pt2t1p1be49uaot&rid=giphy.gif",
				"product_name": "Edited Product",
				"product_description": "Edit Description",
				"product_price": 1000
			})
			.then((res) => {
				this.fetchDb();
			})
			.catch(function (error) {
				console.log("error");
				console.log(error);
			});
	}

	render() {
		return (
			<Modal
				isOpen={true}
				onRequestClose={() => (window.location.pathname = "/manage")}
			>
				<div className="p-6">
					<button
						onClick={() => (window.location.pathname = "/manage")}
						className="pr-4 pl-4 pt-4 absolute right-0 top-0"
					>
						X
					</button>
					<hr />
					<h1 className="text-center font-bold text-3xl">DETAILS</h1>
					<div>
						<img
							src={this.state.menu.product_image}
							alt="Product Feature"
							className="rounded-md w-full"
						/>
						<p>NAME: {this.state.menu.product_name}</p>
						<p>PRICE: ₱{this.state.menu.product_price}</p>
						<p>
							DESCRIPTION: {this.state.menu.product_description}
						</p>
						<p>
							<button className="font-bold" onClick={() => this.removeCard()}>Delete</button>
						</p>
						<p>
							{/* <button className="font-bold" onClick={() => this.updateCard()}>Update</button> */}
							<Link className="font-bold" to={`/manage/${this.state.menu._id}/update`}>
								Edit
							</Link>
						</p>
					</div>
				</div>
			</Modal>
		);
	}
}

export default Details;
