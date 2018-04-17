import React from 'react';

import {ADD_TODO, TOGGLE_TODO, SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from './../js/constants/action-types';

import store from './../js/store/todo-app-store';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

let nextTodoId = 0;

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case SHOW_ALL:
            return todos;
        case SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            return todos;
    }
};

const TodoApp = ({todos, visibilityFilter}) => (
    <div>
        <h1>Todo App</h1>

        <AddTodo onAddClick={(todoTextInput) => {
            if (todoTextInput === '') {
                return;
            }

            store.dispatch({
                type: ADD_TODO,
                id: nextTodoId++,
                text: todoTextInput,
                completed: false,
            });
        }
        }></AddTodo>

        <TodoList
            todos={getVisibleTodos(todos, visibilityFilter)}
            onTodoClick={id => {
                store.dispatch({
                    type: TOGGLE_TODO,
                    id
                })
            }}></TodoList>

        <Footer />

        {/*<Footer visibilityFilter={visibilityFilter}
                onFilterClick={filter => {
                    store.dispatch({type: SET_VISIBILITY_FILTER, filter})
                }}
        />*/}

    </div>
);

export default TodoApp;