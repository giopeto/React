import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import store from './js/store/todo-app-store';

import TodoApp from './components/TodoApp';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);