import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activePage: "Home",
    };
  }

  clickHandler = (e) => {
    this.setState({
      activePage: e.target.innerHTML,
    });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light flex p-2 bg-gray-200">
        <img
          src={logo}
          width="35"
          height="35"
          alt="Cravings Logo"
          className="navbar-brand mr-6"
        />

        <ul className="navbar-nav flex">
          <li className="mr-3">
            <Link
              className={
                "nav-link inline-block border border-white rounded py-1 px-3 " +
                (this.state.activePage === "Home"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black")
              }
              onClick={this.clickHandler}
              to="/"
            >
              Home
            </Link>
          </li>

          <li className="mr-3">
            <Link
              className={
                "nav-link inline-block border border-white rounded py-1 px-3 " +
                (this.state.activePage === "Catalogue"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black")
              }
              onClick={this.clickHandler}
              to="/catalogue"
            >
              Catalogue
            </Link>
          </li>

          <li className="mr-3">
            <Link
              className={
                "nav-link inline-block border border-white rounded py-1 px-3 " +
                (this.state.activePage === "Contact us"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black")
              }
              onClick={this.clickHandler}
              to="/contactUs"
            >
              Contact us
            </Link>
          </li>

          <li className="mr-3 absolute right-0">
            <Link
              className={
                "nav-link inline-block border border-white rounded py-1 px-3 " +
                (this.state.activePage === "Account"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black")
              }
              onClick={this.clickHandler}
              to="/account"
            >
              Account
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
