import React, { Component } from "react";
import axios from "axios";
import Modal from "react-modal";
import cancelIcon from "../images/cancel-icon.png";

class Create extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menu: [],
			create_img: '',
			create_name: '',
			create_desc: '',
			create_price: 0,
		};
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

	submitHandler = (event) => {
		event.preventDefault();
		let img = this.state.create_img;
		let name = this.state.create_name;

		if (img === '') {
			img = "https://media1.giphy.com/media/PmuRN2xj0tfwuTPpIu/giphy.gif?cid=ecf05e47us9m25w57cq5p6qjt63iutw08pt2t1p1be49uaot&rid=giphy.gif";
		}

		if (name === '') {
			name = "UNTITLED";
		}

		this.setState({
			"create_img": img,
			"create_name": name
		}, () => {
			axios
				.post("http://localhost:3001/menu", {
					"product_image": this.state.create_img,
					"product_name": this.state.create_name,
					"product_description": this.state.create_desc,
					"product_price": this.state.create_price
				})
				.then((res) => {
					window.location.pathname = "/menu";
				})
				.catch(function (error) {
					console.log(error);
				});
		})
	}

	inputHandler = (event) => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	render() {
		return (
			<Modal
				isOpen={true}
				ariaHideApp={false}
				onRequestClose={() => (window.location.pathname = "/menu")}
			>
				<div className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl p-6 h-full">
					<div className="pr-4 pl-4 pt-4 absolute right-0 top-0">
						<button className="p-1" onClick={() => (window.location.pathname = "/menu")}>
							< img
								src={cancelIcon}
								alt="Cancel Icon"
								className="w-4 h-4"
							/>
						</button>
					</div>
					<hr />
					<h1 className="text-center font-bold text-3xl my-2">CREATE</h1>
					<form onSubmit={this.submitHandler}>
						<div className="md:grid md:grid-cols-2">
							<div>
								<img
									src={this.state.create_img}
									alt="Product Preview"
									className="rounded-md h-64 w-full object-cover"
								/>
								<textarea className="px-2 w-full mt-2 bg-gray-200 rounded-md" style={{ resize: 'none' }} rows="4" onChange={this.inputHandler} value={this.state.create_img} id="create_img" name="create_img" placeholder="Enter Product Image..." />
								<div className="w-full text-center">
									<label className="font-bold font-mono w-full text-center" htmlFor="create_img">
										Image URL
									</label>
								</div>
							</div>
							<div className="md:p-4 mt-8 md:mt-0 space-y-2">
								<div className="md:flex">
									<label className="font-bold font-mono mr-2" htmlFor="create_name">
										Name:
									</label>
									<div className="md:w-1/2 mt-1 md:mt-0">
										<input className="px-2 w-full bg-gray-200 rounded-md" onChange={this.inputHandler} value={this.state.create_name} type="text" id="create_name" name="create_name" placeholder="Enter Product Name..." />
									</div>
								</div>
								<div className="md:flex">
									<label className="font-bold font-mono mr-2" htmlFor="create_price">
										Price:
										</label>
									<div className="md:w-1/2 mt-1 md:mt-0">
										<input className="px-2 w-full bg-gray-200 rounded-md" onChange={this.inputHandler} value={this.state.create_price} type="number" id="create_price" name="create_price" min='0' placeholder="Enter Price..." />
									</div>
								</div>
								<div>
									<label className="font-bold font-mono" htmlFor="create_desc">
										Description:
									</label>
									<div className="mt-1">
										<textarea className="px-2 w-full bg-gray-200 rounded-md" style={{ resize: 'none' }} rows="10" cols="30" onChange={this.inputHandler} value={this.state.create_desc} id="create_desc" name="create_desc" placeholder="Enter Product Description..." />
									</div>
								</div>
							</div>
						</div>
						<div className="w-full text-center">
							<input className="font-bold p-2 m-6 rounded-md bg-blue-900 text-white" type="submit" value="ADD PRODUCT" />
						</div>
					</form>
				</div >
			</Modal >
		);
	}
}

export default Create;
