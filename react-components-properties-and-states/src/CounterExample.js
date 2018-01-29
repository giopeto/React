import React, { Component } from 'react';

class CounterDisplay extends Component {
	render() {
		// Calls the handler props once events are fired
		return(
			<div>
				<div>{this.props.counterProp}</div>
				<button onClick={this.props.incrementCounter}>+</button>
				<button onClick={this.props.decrementCounter}>-</button>
			</div>
		);
	}
}

export class Counter extends Component {
	
	constructor(props) {
		super(props);
		this.state = { counter: 0 };
	}
	
	handleIncrement = () => {
		this.setState({
			counter : this.state.counter + 1
		});
	}

	handleDecrement = () => {
		this.setState({
			counter : this.state.counter - 1
		});
	}

	
	render() {
		// Pass down handlers to CounterDisplay component
		return <div>
			<h2>Counter {this.props.name}</h2>
			<CounterDisplay 
				counterProp={this.state.counter}
				incrementCounter={this.handleIncrement}
		  		decrementCounter={this.handleDecrement}></CounterDisplay>
		</div>;
	}
}

export default Counter;