import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

const counter = (state = 0, action)=> {
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

const store = createStore(counter);

const Counter = ({value}) => {

    let onIncrement = () => store.dispatch({type: 'INCREMENT'});
    let onDecrement = () => store.dispatch({type: 'DECREMENT'});

    return (
        <div>
            <h1>{value}</h1>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
        </div>
    );
};

const render = () => {
    ReactDOM.render(
        <Counter value={store.getState()}/>,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();