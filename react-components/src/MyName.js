import React, { Component } from 'react';

class MyName extends Component {
	get name() {
		return 'hhhh';
	}

	render() {
		return <h1>My name is {this.name}.</h1>;
	}
}

export default MyName;