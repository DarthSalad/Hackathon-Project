// import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { render } from "react-dom";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });
  }

  render() {
    return (
      <div>
        <Link to="">Home</Link>
      </div>
    );
  }
}

export default Profile;
