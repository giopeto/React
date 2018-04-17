import { createStore } from 'redux';
import { combineReducers } from 'redux';

const ADD_TODO = 'ADD_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const SHOW_ALL = 'SHOW_ALL';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
const SHOW_COMPLETED = 'SHOW_COMPLETED';

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

/* Replaced with combineReducers
const todoApp = (state = {}, action) => {
    return {
        todos: todos(state.todos, action),
        visibilityFilter: visibilityFilter(state.visibilityFilter, action)
    };
};*/

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const store = createStore(todoApp);

const firstAddTodoAction = {
    type: ADD_TODO,
    id: 0,
    text: 'Learn Redux',
    completed: false,
};

const secondAddTodoAction = {
    type: ADD_TODO,
    id: 1,
    text: 'Go shopping',
    completed: false,
};

const toggleTodoAction = {
    type: TOGGLE_TODO,
    id: 0,
};

const setVisibilityFilterAction = {
    type: SET_VISIBILITY_FILTER,
    filter: SHOW_COMPLETED
};

console.log('Initial state:');
console.log(store.getState());
console.log('-----------------');

console.log('Dispatching first ADD_TODO:');
store.dispatch(firstAddTodoAction);
console.log(store.getState());
console.log('-----------------');

console.log('Dispatching second ADD_TODO:');
store.dispatch(secondAddTodoAction);
console.log(store.getState());
console.log('-----------------');

console.log('Dispatching TOGGLE_TODO:');
store.dispatch(toggleTodoAction);
console.log(store.getState());
console.log('-----------------');

console.log('Dispatching SET_VISIBILITY_FILTER:');
store.dispatch(setVisibilityFilterAction);
console.log(store.getState());
console.log('-----------------');