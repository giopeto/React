import React from 'react';
import { connect } from "react-redux";

import addTodo from './../js/actions/add-todo';

let todoTextInput = '';

let AddTodo = ({ dispatch }) => (
    <div>
        <input ref={node=> {todoTextInput = node;}} />

        <button onClick={()=> {
            if (!todoTextInput.value) return;

            dispatch(addTodo(todoTextInput.value));

            todoTextInput.value = '';
        }}>Add todo</button>
    </div>
);

AddTodo = connect()(AddTodo);

export default AddTodo;