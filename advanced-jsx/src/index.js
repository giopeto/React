import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// I
const myDiv = <div className="big">I AM A BIG DIV</div>;

ReactDOM.render(
	myDiv,
	document.getElementById('root')
);




// II
const math = (
	<h1>2 + 3 = {2 + 3}</h1>
);

ReactDOM.render(
	math,
	document.getElementById('math')
);




// III
const goose = 'https://upload.wikimedia.org/wikipedia/commons/0/04/Kanadische_Wildgans_%285747228780%29.jpg';

const gooseImg = (
	<img src={goose} />
);

ReactDOM.render(
	gooseImg,
	document.getElementById('goose-img')
);




// IV Event Listeners in JSX
const h2 = <h2>Event Listeners</h2>;

const gooseImgWithEvent = (
	<div>
		{h2}
		<img 
			src={goose}
			onClick={myFunc} />
	</div>
);

function myFunc() {
	alert('Alert from onClick');
}


ReactDOM.render(
	gooseImgWithEvent,
	document.getElementById('event-listeners')
);




// V JSX Conditionals: If Statements That Do Work
const conditionalRenderElementH2 = <h2>JSX Conditionals: If Statements That Do Work</h2>;

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg',
  doggy: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

const age = 22;
const judgmental = Math.random() < 0.5;

const tasty = (
  <ul>
    <li>Applesauce</li>
    { !judgmental && <li>Pizza</li> }
    { judgmental && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);

const conditionalRenderElement = (
	<div>
		{conditionalRenderElementH2}
		{img}
		<h3>Applesauce && statement</h3>
		{tasty}
	</div>
);


ReactDOM.render(
	conditionalRenderElement, 
	document.getElementById('conditional-render-element')
);




// .map in JSX
const mapH1 = <h1>.map in JSX</h1>;

const strings = ['Home', 'Shop', 'About Me'];

const listItems = strings.map((string, i) => <li key={'strings_' + i}>{string}</li>);

const ulElement = <ul>{listItems}</ul>;

const mapElement = (
	<div>
		{mapH1}
		{ulElement}
	</div>
);

ReactDOM.render(
	mapElement, 
	document.getElementById('map-element')
);


const h11 = React.createElement(
  "h1",
  null,
  "Hello, world"
);



// In JSX use className instead of class because class is reserved javascript word


// In JSX all self closed element need to be closed - <br /> instead of <br>