import React from 'react';
import ReactDOM from 'react-dom';

import store from './js/store/todo-app-store';

import TodoApp from './components/TodoApp';

const render = () => {
    ReactDOM.render(
        <TodoApp {...store.getState()} />,
        document.getElementById('root')
    );
};

store.subscribe(render);
store.subscribe(()=> console.log(store.getState()));

render();