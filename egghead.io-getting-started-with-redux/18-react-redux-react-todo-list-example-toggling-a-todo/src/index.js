import { createStore } from 'redux';
import { combineReducers } from 'redux';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
const SHOW_ALL = 'SHOW_ALL';

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

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

class TodoApp extends Component {
    render() {
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
                    {this.props.todos.map(t =>
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
            </div>
        );
    }
}

const store = createStore(todoApp);

const render = () => {
    ReactDOM.render(
        <TodoApp todos={store.getState().todos} />,
        document.getElementById('root')
    );
};

const logStore = () => {
    console.log(store.getState());
};

store.subscribe(render);
store.subscribe(logStore);
render();