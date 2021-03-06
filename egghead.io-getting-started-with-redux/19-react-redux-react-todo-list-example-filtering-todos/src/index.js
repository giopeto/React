import { createStore } from 'redux';
import { combineReducers } from 'redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
const SHOW_ALL = 'SHOW_ALL';
const SHOW_ACTIVE = 'SHOW_ACTIVE';
const SHOW_COMPLETED = 'SHOW_COMPLETED';

let nextTodoId = 0;

const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: action.completed
            };
        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }
            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)

            ];
        case TOGGLE_TODO:
            return state.map(t => todo(t, action));
        default:
            return state;
    }
};

const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

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

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

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

                <ul>
                    {visibleTodos.map(t =>
                        <li key={t.id}
                            onClick={ () =>
                                store.dispatch({
                                    type: TOGGLE_TODO,
                                    id: t.id
                                })
                            }
                            style={{textDecoration: t.completed ? 'line-through': 'none'}}>{t.id} {t.text}</li>
                    )}
                </ul>

                <div>
                    Show:
                    {' '}
                    <FilterLink filter={SHOW_ALL} currentFilter={visibilityFilter}>All</FilterLink>
                    {' | '}
                    <FilterLink filter={SHOW_ACTIVE} currentFilter={visibilityFilter}>Active</FilterLink>
                    {' | '}
                    <FilterLink filter={SHOW_COMPLETED} currentFilter={visibilityFilter}>Completed</FilterLink>
                </div>

            </div>
        );
    }
}

const store = createStore(todoApp);

const render = () => {
    ReactDOM.render(
        <TodoApp {...store.getState()} />,
        document.getElementById('root')
    );
};

const logStore = () => {
    console.log(store.getState());
};

store.subscribe(render);
store.subscribe(logStore);
render();