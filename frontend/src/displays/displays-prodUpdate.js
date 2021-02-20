import React, { Component } from "react";
import axios from "axios";
import Modal from "react-modal";

class Details extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: [],
			pimg: '',
			pname: '',
			pdesc: '',
			pprice: 0,
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
					pimg: res.data.product_image,
					pname: res.data.product_name,
					pdesc: res.data.product_description,
					pprice: res.data.product_price
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
				"product_image": this.state.pimg,
				"product_name": this.state.pname,
				"product_description": this.state.pdesc,
				"product_price": this.state.pprice
			})
			.then((res) => {
				window.location.pathname = `/manage/${this.state.menu._id}`;
			})
			.catch(function (error) {
				console.log("error");
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
				onRequestClose={() => (window.location.pathname = `/manage/${this.state.menu._id}`)}
			>
				<div className="p-6">
					<button
						onClick={() => (window.location.pathname = `/manage/${this.state.menu._id}`)}
						className="pr-4 pl-4 pt-4 absolute right-0 top-0"
					>
						X
					</button>
					<hr />
					<h1 className="text-center font-bold text-3xl">DETAILS</h1>
					<div>
						<div className="p-3 col-span-2 col-start-2 bg-blue-600 border-blue-200 border-8">
							<h1 className="text-center font-bold text-2xl col-span-4 text-white">Le Product Update Form</h1>

							<form className="text-right" onSubmit={this.submitHandler}>
								<div className="grid grid-cols-3 py-1">
									<label className="font-bold pr-2 w-full text-white" htmlFor="pname">Name:</label>
									<input className="col-span-2 px-2 w-full" onChange={this.inputHandler} value={this.state.pname} type="text" id="pname" name="pname" placeholder="Enter Product Name..." />
								</div>

								<div className="grid grid-cols-3 py-1">
									<label className="font-bold pr-2 w-full text-white" htmlFor="pdesc">Description:</label>
									<textarea className="col-span-2 px-2 w-full" style={{ resize: 'none' }} rows="1" cols="30" onChange={this.textAreaHandler} value={this.state.pdesc} id="pdesc" name="pdesc" placeholder="Enter Product Description..." />
								</div>

								<div className="grid grid-cols-3 py-1">
									<label className="font-bold pr-2 w-full text-white" htmlFor="pimg">Image URL:</label>
									<textarea className="col-span-2 px-2 w-full" style={{ resize: 'none' }} rows="1" onChange={this.textAreaHandler} value={this.state.pimg} id="pimg" name="pimg" placeholder="Enter Product Image..." />
								</div>

								<div className="grid grid-cols-3 py-1">
									<label className="font-bold pr-2 w-full text-white" htmlFor="pprice">Price:</label>
									<input className="col-span-2 px-2 w-full" onChange={this.inputHandler} value={this.state.pprice} type="number" id="pprice" name="pprice" min='0' placeholder="Enter Price..." />
								</div>

								<p className="grid grid-cols-3 py-4">
									<input className="font-bold col-start-2 bg-blue-700 text-white" type="submit" value="UPDATE" />
								</p>
							</form>
						</div>
						{/* <p>IMG SOURCE: {this.state.menu.product_image}</p>
						<p>NAME: {this.state.menu.product_name}</p>
						<p>PRICE: ₱{this.state.menu.product_price}</p>
						<p>
							DESCRIPTION: {this.state.menu.product_description}
						</p>
						<p>
							<button className="font-bold" onClick={() => this.updateCard()}>Update</button>
						</p> */}
					</div>
				</div>
			</Modal>
		);
	}
}

export default Details;
