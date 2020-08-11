import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import axios from 'axios';

const ItemCard = props => (
	<div className="card p-6 shadow-md h-64 w-64 rounded-md">
		<div className="container">
			<p>{props.menu.product_image}</p>
			<h4><b>{props.menu.product_name}</b></h4>
			<p>{props.menu.product_description}</p>
			<p>P{props.menu.product_price}</p>
		</div>
	</div>
)

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = { menu: [] };
	}

	componentDidMount() {
		axios.get('http://localhost:3001/menu')
			.then(res => {
				this.setState({ menu: res.data })
			})
			.catch(function (error) {
				console.log(error);
			})
	}

	menuCardsList() {
		return this.state.menu.map(function (currentProduct, i) {
			return <ItemCard menu={currentProduct} key={i} />;
		})
	}

	render() {
		return (
			<div className="p-6">
				<h3>Card Menu List</h3>
				<div className="flex flex-wrap">
					{this.menuCardsList()}
				</div>
			</div>
		);
	}
}

export default Menu;
