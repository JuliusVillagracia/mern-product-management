import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <ul class="flex p-2 bg-gray-200">
        <li class="mr-3">
          <a
            class="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white"
            href="/"
          >
            Home
          </a>
        </li>
        <li class="mr-3">
          <a
            class="inline-block border border-white rounded py-1 px-3 bg-gray-200"
            href="/"
          >
            Catalogue
          </a>
        </li>
        <li class="mr-3">
          <a
            class="inline-block border border-white rounded py-1 px-3 bg-gray-200"
            href="/"
          >
            Contact us
          </a>
        </li>
        <li class="mr-3 absolute right-0">
          <a
            class="inline-block border border-white rounded py-1 px-3 bg-gray-200"
            href="/"
          >
            Account
          </a>
        </li>
      </ul>
    );
  }
}
