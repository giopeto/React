import {SET_VISIBILITY_FILTER} from "./../constants/action-types";

const setVisibilityFilter = filter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});

export default setVisibilityFilter;
