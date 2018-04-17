import { connect } from "react-redux";

import {SET_VISIBILITY_FILTER} from "./../js/constants/action-types";

import Link from './Link';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        onClick: () => {
            dispatch({
                type: SET_VISIBILITY_FILTER,
                filter: props.filter
            })
        }
    }
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;