import React, { Component } from "react";
import axios from "axios";
import Modal from "react-modal";

class Details extends Component {
	constructor(props) {
		super(props);
		this.state = { menu: [] };
	}

	componentDidMount() {
		axios
			.get("http://localhost:3001/menu/" + this.props.match.params.id)
			.then((res) => {
				this.setState({ menu: res.data });
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		return (
			<Modal
				isOpen={true}
				onRequestClose={() => (window.location.pathname = "/menu")}
			>
				<div className="p-6">
					<button
						onClick={() => (window.location.pathname = "/menu")}
						className="pr-4 pl-4 pt-4 absolute right-0 top-0"
					>
						X
					</button>
					<hr />
					<h1 className="text-center font-bold text-3xl">DETAILS</h1>
					<div>
						{/* <p>{this.state.menu.product_image}</p> */}
						<img
							src="https://images.unsplash.com/photo-1591429640801-942538e4637d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
							alt="Chikin"
							className="rounded-md w-full"
						/>
						<p>NAME: {this.state.menu.product_name}</p>
						<p>PRICE: {this.state.menu.product_price}</p>
						<p>
							DESCRIPTION: {this.state.menu.product_description}
						</p>
					</div>
				</div>
			</Modal>
		);
	}
}

export default Details;
