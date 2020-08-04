import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light p-2 bg-gray-200">
        <ul class="navbar-nav flex">
          <li class="mr-3">
            <Link
              class="nav-link inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
              to="/"
            >
              Home
            </Link>
          </li>

          <li class="mr-3">
            <Link
              class="nav-link inline-block border border-white rounded py-1 px-3 bg-gray-200"
              to="/catalogue"
            >
              Catalogue
            </Link>
          </li>

          <li class="mr-3">
            <Link
              class="nav-link inline-block border border-white rounded py-1 px-3 bg-gray-200"
              to="/contactUs"
            >
              Contact us
            </Link>
          </li>

          <li class="mr-3 absolute right-0">
            <Link
              class="nav-link inline-block border border-white rounded py-1 px-3 bg-gray-200"
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
