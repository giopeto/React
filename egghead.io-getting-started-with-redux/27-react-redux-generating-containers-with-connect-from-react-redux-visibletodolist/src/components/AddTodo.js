import React from 'react';
import PropTypes from 'prop-types';

import {ADD_TODO} from "./../js/constants/action-types";

let todoTextInput, nextTodoId = 0;

const AddTodo = (props, { store }) => (
    <div>
        <input ref={node=> {todoTextInput = node;}} />

        <button onClick={()=> {
            if (todoTextInput === '') return;

            store.dispatch({
                type: ADD_TODO,
                id: nextTodoId++,
                text: todoTextInput.value,
                completed: false,
            });

            todoTextInput.value = '';
        }}>Add todo</button>
    </div>
);

AddTodo.contextTypes = {
    store: PropTypes.object
};

export default AddTodo;