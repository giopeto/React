import React from 'react';

import AddTodo from './AddTodo';
import Footer from './Footer';
import VisibleTodos from './VisibleTodos';

const TodoApp = () => (
    <div>
        <h1>Todo App</h1>
        <AddTodo />
        <VisibleTodos />
        <Footer />
    </div>
);

export default TodoApp;