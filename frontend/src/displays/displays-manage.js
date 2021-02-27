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

class Manage extends Component {
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
		this.fetchDb();
	}

	fetchDb() {
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

	submitHandler = (event) => {
		event.preventDefault();
		axios
			.post("http://localhost:3001/menu", {
				"product_image": this.state.pimg,
				"product_name": this.state.pname,
				"product_description": this.state.pdesc,
				"product_price": this.state.pprice
			})
			.then((res) => {
				this.fetchDb()
				this.setState({
					'pimg': '',
					'pname': '',
					'pdesc': '',
					'pprice': 0
				});
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
			<div className="p-6 grid grid-cols-4">
				<div className="p-3 col-span-2 col-start-2 bg-blue-600 border-blue-200 border-8">
					<h1 className="text-center font-bold text-2xl col-span-4 text-white">Le Product Form</h1>

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
							<input className="font-bold col-start-2 bg-blue-700 text-white" type="submit" value="ADD" />
						</p>
					</form>
				</div>

				<h1 className="text-center font-bold text-4xl col-span-4">Le Menu</h1>
				<div className="flex flex-wrap col-span-4">{this.menuCardsList()}</div>
			</div>
		);
	}
}

export default Manage;
