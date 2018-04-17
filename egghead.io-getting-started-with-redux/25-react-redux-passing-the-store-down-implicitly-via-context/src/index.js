import React from 'react';
import ReactDOM from 'react-dom';

import store from './js/store/todo-app-store';

import TodoApp from './components/TodoApp';
import Provider from './components/Provider';

ReactDOM.render(
    <Provider store={store}>
        <TodoApp />
    </Provider>,
    document.getElementById('root')
);