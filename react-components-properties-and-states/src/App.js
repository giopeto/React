import React, { Component } from 'react';

import Greeting from './Greeting';
import Talker from './Talker';
import List from './List';
import Counter from './CounterExample';
import TodoApp from './TodoApp';

class App extends Component {
	
	render() {
		
		const greetingName = 'Frantfur';

		return (
			<div>
				<h1>App</h1>
				
				<Greeting 
					message="This is some top secret info." 
					name={greetingName}
					town="Flundon" 
					age={2}
					myInfo={["top", "secret", "lol"]}
					haunted={false}/>

					<Talker />

					<div>
						<List type='Living Musician'>
							<li>Sachiko M</li>
							<li>Harvey Sid Fisher</li>
						</List>
						
						<List type='Living Cat Musician'>
							<li>Nora the Piano Cat</li>
						</List>
					</div>

					<Counter />

					<TodoApp />

			</div>
		);
	}
}

export default App;
