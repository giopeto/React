// React Redux Tutorial for Beginners: learning Redux in 2018 => https://www.valentinog.com/blog/react-redux-tutorial-beginners/

import React from "react";
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./App";

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));