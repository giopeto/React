import React from 'react';

const owl = {
	title: 'Excellent Owl',
	src: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-owl.jpg',
	width: 200,
	height: 200
};


class Owl extends React.Component {
	render() {
		return (
			<div>
				<h1>{owl.title}</h1>
				<img src={owl.src} alt={owl.title} width={owl.width} height={owl.height}/>
	  		</div>
		)
	}
}


export default Owl;