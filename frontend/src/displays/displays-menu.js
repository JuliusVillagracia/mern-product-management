import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ItemCard = (props) => (
	<button className="p-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
		<div className="p-4 bg-gray-100 shadow-md rounded-lg" onClick={() => (window.location.pathname = "/menu/" + props.menu._id)}>
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
			<div>
				<div className="text-center mb-4">
					<Link
						className={
							"font-bold py-2 px-8 rounded-md bg-blue-900 text-white"
						}
						to="/menu/create"
					>
						ADD PRODUCT
					</Link>
				</div>
				<div className="px-6">
					<div>
						{this.menuCardsList()}
					</div>
				</div>
			</div>
		);
	}
}

export default Manage;
