import React, { Component } from "react";
import axios from "axios";
import Modal from "react-modal";

class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: [],
			update_img: '',
			update_name: '',
			update_desc: '',
			update_price: 0,
			minRows: 1,
			maxRows: 5,
		};
	}

	componentDidMount() {
		axios
			.get("http://localhost:3001/menu/" + this.props.match.params.id)
			.then((res) => {
				this.setState({
					menu: res.data,
					update_img: res.data.product_image,
					update_name: res.data.product_name,
					update_desc: res.data.product_description,
					update_price: res.data.product_price
				});
			})
			.catch(function (error) {
				console.log(error);
			});
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

	submitHandler = (event) => {
		event.preventDefault();
		axios
			.put(`http://localhost:3001/menu/${this.state.menu._id}`, {
				"product_image": this.state.update_img,
				"product_name": this.state.update_name,
				"product_description": this.state.update_desc,
				"product_price": this.state.update_price
			})
			.then((res) => {
				window.location.pathname = `/menu/${this.state.menu._id}`;
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	inputHandler = (event) => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	textAreaHandler = (event) => {
		this.inputHandler(event);

		const prevRows = event.target.rows;
		event.target.rows = this.state.minRows;

		if (prevRows < Math.floor(event.target.scrollHeight / 24)) {
			if (Math.floor(event.target.scrollHeight / 24) < this.state.maxRows) {
				event.target.rows = Math.floor(event.target.scrollHeight / 24);
			} else {
				event.target.rows = this.state.maxRows;
			}
		}
	}

	render() {
		return (
			<Modal
				isOpen={true}
				onRequestClose={() => (window.location.pathname = `/menu/${this.state.menu._id}`)}
			>

				<div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl p-6 h-full">
					<div className="pr-4 pl-4 pt-4 absolute right-0 top-0">
						<button
							onClick={() => (window.location.pathname = window.location.pathname = `/menu/${this.state.menu._id}`)}
							className="px-2"
						>
							X
						</button>
					</div>
					<hr />
					<h1 className="text-center font-bold text-3xl my-2">EDIT</h1>
					<form onSubmit={this.submitHandler}>
						<div className="h-1/2 md:grid md:grid-cols-2">
							<div>
								<img
									src={this.state.update_img}
									alt="Product Feature"
									className="rounded-md w-full object-cover"
								/>
								<textarea className="w-full mt-2 bg-gray-200 rounded-md" style={{ resize: 'none' }} rows="4" onChange={this.textAreaHandler} value={this.state.update_img} id="update_img" name="update_img" placeholder="Enter Product Image..." />
								<div className="w-full text-center">
									<label className="font-bold font-mono w-full text-center" htmlFor="update_img">
										Image URL
									</label>
								</div>
							</div>
							<div className="md:p-4 mt-8 md:mt-0 space-y-2">
								<div className="md:flex">
									<label className="font-bold w-12 font-mono mr-2" htmlFor="update_name">
										Name:
									</label>
									<div className="md:w-1/2 mt-1 md:mt-0">
										<input className="px-2 w-full bg-gray-200 rounded-md" onChange={this.inputHandler} value={this.state.update_name} type="text" id="update_name" name="update_name" placeholder="Enter Product Name..." />
									</div>
								</div>
								<div className="md:flex">
									<label className="font-bold w-12 font-mono mr-2" htmlFor="update_price">
										Price:
										</label>
									<div className="md:w-1/2 mt-1 md:mt-0">
										<input className="px-2 w-full bg-gray-200 rounded-md" onChange={this.inputHandler} value={this.state.update_price} type="number" id="update_price" name="update_price" min='0' placeholder="Enter Price..." />
									</div>
								</div>
								<div>
									<label className="font-bold font-mono" htmlFor="update_desc">
										Description:
									</label>
									<div className="mt-1">
										<textarea className="px-2 w-full bg-gray-200 rounded-md" style={{ resize: 'none' }} rows="10" cols="30" onChange={this.textAreaHandler} value={this.state.update_desc} id="update_desc" name="update_desc" placeholder="Enter Product Description..." />
									</div>
								</div>
							</div>
						</div>
						<div className="w-full text-center">
							<input className="font-bold p-2 m-6 rounded-md bg-blue-900 text-white" type="submit" value="UPDATE PRODUCT" />
						</div>
					</form>
				</div >
			</Modal >
		);
	}
}

export default Details;
