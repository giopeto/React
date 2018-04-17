import {ADD_TODO} from "./../constants/action-types";

let nextTodoId = 0;

const addTodo = text => ({
        type: ADD_TODO,
        id: nextTodoId++,
        text: text,
        completed: false,
});

export default addTodo;
