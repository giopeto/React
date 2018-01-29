import React, { Component } from 'react';

import { Button } from './Button';

class Talker extends Component {
	
	handleClick() {
		let speech = 'Blahhhhh';
		alert(speech);
	}

	render() {
		return <Button onClick={this.handleClick} text='Click me!' />;
	}
}

export default Talker;