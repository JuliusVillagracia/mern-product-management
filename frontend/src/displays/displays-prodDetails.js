import React, { Component } from "react";
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
				window.location.pathname = "/menu";
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
				<div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl pt-6 h-full">
					<div className="pr-4 pl-4 pt-4 absolute right-0 top-0">
						<button
							onClick={() => this.removeCard()}
							className="px-2"
						>
							D
						</button>
						<button
							onClick={() => (window.location.pathname = `/menu/${this.state.menu._id}/update`)}
							className="px-2"
						>
							U
						</button>
						<button
							onClick={() => (window.location.pathname = "/menu")}
							className="px-2"
						>
							X
						</button>
					</div>
					<hr />
					<h1 className="text-center font-bold text-3xl my-2">DETAILS</h1>
					<div className="h-1/2 md:grid md:grid-cols-2">
						<img
							src={this.state.menu.product_image}
							alt="Product Feature"
							className="rounded-md w-full object-cover"
						/>
						<div className="p-4">
							<div className="md:flex">
								<div className="font-bold w-12 font-mono mr-2">
									NAME:
								</div>
								<div className="md:w-1/2 mt-1 md:mt-0">
									{this.state.menu.product_name}
								</div>
							</div>
							<div className="md:flex">
								<div className="font-bold w-12 font-mono mr-2 mt-4 md:mt-0">
									PRICE:
								</div>
								<div className="md:w-1/2 mt-1 md:mt-0">
									₱{this.state.menu.product_price}
								</div>
							</div>
							<div>
								<div className="font-bold w-12 font-mono mr-2 mt-4 md:mt-0">
									DESCRIPTION:
								</div>
								<div className="md:w-1/2 mt-1 md:mt-0">
									{this.state.menu.product_description}
								</div>
							</div>
						</div>
					</div>
				</div>
			</Modal>
		);
	}
}

export default Details;
