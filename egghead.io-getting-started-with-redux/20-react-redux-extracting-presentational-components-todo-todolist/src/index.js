import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from './js/constants/action-types';
import store from './js/store/todo-app-store';
import TodoList from './components/TodoList';

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

const FilterLink = ({filter, currentFilter, children}) => {

    if (filter === currentFilter) {
        return (
            <span>{children}</span>
        );
    }

    return (
        <a href={'#'} onClick={event => {
            event.preventDefault();
            store.dispatch({type: SET_VISIBILITY_FILTER, filter})
            }}>{children}</a>
    );
};

class TodoApp extends Component {
    render() {

        const {todos, visibilityFilter} = this.props;
        const visibleTodos = getVisibleTodos(todos, visibilityFilter);

        return(
            <div>
                <h1>Todo App</h1>

                <input ref={node=> {this.todoTextInput = node;}} />

                <button onClick={()=> {
                    if (this.todoTextInput.value === '') {
                        return;
                    }

                    store.dispatch({
                        type: ADD_TODO,
                        id: nextTodoId++,
                        text: this.todoTextInput.value,
                        completed: false,
                    });
                    this.todoTextInput.value = '';
                }}>Add todo</button>

                <div>
                    Show:
                    {' '}
                    <FilterLink filter={SHOW_ALL} currentFilter={visibilityFilter}>All</FilterLink>
                    {' | '}
                    <FilterLink filter={SHOW_ACTIVE} currentFilter={visibilityFilter}>Active</FilterLink>
                    {' | '}
                    <FilterLink filter={SHOW_COMPLETED} currentFilter={visibilityFilter}>Completed</FilterLink>
                </div>

                <TodoList
                    todos={visibleTodos}
                    onTodoClick={id => {
                        store.dispatch({
                            type: TOGGLE_TODO,
                            id: id
                        })
                    }}></TodoList>

            </div>
        );
    }
}

const render = () => {
    ReactDOM.render(
        <TodoApp {...store.getState()} />,
        document.getElementById('root')
    );
};


store.subscribe(render);
store.subscribe(()=> console.log(store.getState()));
render();