// React Redux Tutorial for Beginners: learning Redux in 2018 => https://www.valentinog.com/blog/react-redux-tutorial-beginners/


/*import React from 'react';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import store from "./js/store/index";
import { addArticle } from "./js/actions/index";

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();


window.store = store;
window.addArticle = addArticle;*/



import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./App";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));