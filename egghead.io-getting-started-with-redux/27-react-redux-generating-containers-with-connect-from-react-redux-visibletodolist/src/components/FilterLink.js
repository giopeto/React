import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {SET_VISIBILITY_FILTER} from "./../js/constants/action-types";

import Link from './Link';

class FilterLink extends Component {

    componentDidMount() {
        const { store } = this.context;
        this.unsubscriber = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscriber();
    }

    render() {
        const props = this.props;
        const { store } = this.context;
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

FilterLink.contextTypes = {
    store: PropTypes.object
};

export default FilterLink;