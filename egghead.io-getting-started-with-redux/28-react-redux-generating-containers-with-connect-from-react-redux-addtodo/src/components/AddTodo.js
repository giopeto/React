import React from 'react';
import { connect } from "react-redux";

import {ADD_TODO} from "./../js/constants/action-types";

let todoTextInput, nextTodoId = 0;

let AddTodo = ({ dispatch }) => (
    <div>
        <input ref={node=> {todoTextInput = node;}} />

        <button onClick={()=> {
            if (todoTextInput === '') return;

            dispatch({
                type: ADD_TODO,
                id: nextTodoId++,
                text: todoTextInput.value,
                completed: false,
            });

            todoTextInput.value = '';
        }}>Add todo</button>
    </div>
);

AddTodo = connect()(AddTodo);

export default AddTodo;