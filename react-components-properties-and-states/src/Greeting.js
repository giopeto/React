import React, { Component } from 'react';

class Greeting extends Component {
	
	render() {
		
		const stringProps = JSON.stringify(this.props);

		return (
			<div>
				<h1>Hi there, {this.props.name}!</h1>
				<pre>{stringProps}</pre>	
			</div>
			
		);
	}
}

export default Greeting;
