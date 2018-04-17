import React from 'react';

let todoTextInput;

const AddTodo = ({onAddClick}) => (
    <div>
        <input ref={node=> {todoTextInput = node;}} />

        <button onClick={()=> {
            onAddClick(todoTextInput.value);
            todoTextInput.value = '';
        }}>Add todo</button>
    </div>
);

export default AddTodo;