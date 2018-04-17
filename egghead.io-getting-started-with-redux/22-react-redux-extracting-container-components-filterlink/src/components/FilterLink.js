import React, { Component } from 'react';

import store from './../js/store/todo-app-store';
import {SET_VISIBILITY_FILTER} from "./../js/constants/action-types";

import Link from './Link';

class FilterLink extends Component {

    componentDidMount() {
        this.unsubscriber = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscriber();
    }

    render() {
        const props = this.props;
        const state = store.getState();

        return(
            <Link active={props.filter === state.visibilityFilter}
                onClick={() => {
                    store.dispatch({
                        type: SET_VISIBILITY_FILTER,
                        filter: props.filter
                    });
                }}>
                {props.children}
            </Link>
        );
    }
}

export default FilterLink;