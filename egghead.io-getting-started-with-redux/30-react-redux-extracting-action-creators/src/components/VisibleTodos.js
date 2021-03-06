import { connect } from "react-redux";

import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from './../js/constants/action-types';
import toggleTodo from "./../js/actions/toggle-todo";

import TodoList from './TodoList';

const mapStateToProps = state => {

    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    };
};

const mapDispatchToProps = dispatch => {

    return {
        onTodoClick: id => { dispatch(toggleTodo(id)); }
    };
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

const VisibleTodos = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodos;