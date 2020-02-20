import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
	render() {
		console.log("Die: ", this.props.face);
		return <i className={`Die fas fa-dice-${this.props.face}`} />;
	}
}
export default Die;
