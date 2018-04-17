import { TOGGLE_TODO } from './../constants/action-types';

const toggleTodo = id => ({type: TOGGLE_TODO, id});

export default toggleTodo;