import React, { Component } from "react";
import axios from 'axios';

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = { menu: [] };
    }

    componentDidMount() {
        axios.get('http://localhost:3001/menu/' + this.props.match.params.id)
            .then(res => {
                this.setState({ menu: res.data })
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div className="p-6">
                <h1 className="text-center font-bold text-4xl">DETAILS</h1>
                <div>
                    <p>{this.state.menu.product_image}</p>
                    <p>NAME: {this.state.menu.product_name}</p>
                    <p>PRICE: {this.state.menu.product_price}</p>
                    <p>DESCRIPTION: {this.state.menu.product_description}</p>
                </div>
            </div>
        );
    }
}

export default Details;
