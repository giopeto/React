import React from 'react';
import ReactDOM from 'react-dom';

const h1 = <h1>React JSX</h1>;

const h2 = <h2>React list</h2>;

const myList = (
	<ul>
		<li>Learn React</li>
		<li>Become a Developer</li>
	</ul>
);

const complicatedElement = (
	<div>
		{h2}
		{myList}
	</div>
);



ReactDOM.render(
	h1,
	document.getElementById('simple-element')
);

ReactDOM.render(
	complicatedElement,
	document.getElementById('more-complicated-element')
);