import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Owl from './Owl';
import MyName from './MyName';
import EventListenerComponent from './EventListenerComponent';


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Owl />, document.getElementById('owl'));
ReactDOM.render(<MyName />, document.getElementById('my-name'));
ReactDOM.render(<EventListenerComponent />, document.getElementById('event-listener'));