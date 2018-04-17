import React from 'react';

import {ADD_TODO} from "./../js/constants/action-types";

import store from './../js/store/todo-app-store';

let todoTextInput, nextTodoId = 0;

const AddTodo = () => (
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

export default AddTodo;