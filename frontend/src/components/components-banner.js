import React, { Component } from "react";
import banner from "../deliveryBanner.jpg";

export default class Banner extends Component {
  render() {
    return (
      <div
        class="w-full bg-no-repeat bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url(${banner})`,
          height: "500px",
        }}
      ></div>
    );
  }
}
