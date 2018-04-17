import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE, TOGGLE_TODO} from './../js/constants/action-types';

import TodoList from './TodoList';

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

class VisibleTodos extends Component {

    componentDidMount() {
        const { store } = this.context;
        this.unsubscriber = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscriber();
    }

    render() {
        const { store } = this.context;
        const state = store.getState();

        return (
            <TodoList
                todos={getVisibleTodos(state.todos, state.visibilityFilter)}
                onTodoClick={id => {
                    store.dispatch({
                        type: TOGGLE_TODO,
                        id
                    })
                }}></TodoList>);
    };
}

VisibleTodos.contextTypes = {
    store: PropTypes.object
};

export default VisibleTodos;