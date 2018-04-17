import React from 'react';

import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../js/constants/action-types';

import FilterLink from './FilterLink';

const Footer = ({visibilityFilter, onFilterClick}) => (
    <div>
        Show:
        {' '}
        <FilterLink filter={SHOW_ALL} currentFilter={visibilityFilter} onFilterLinkClick={onFilterClick}>All</FilterLink>
        {' | '}
        <FilterLink filter={SHOW_ACTIVE} currentFilter={visibilityFilter} onFilterLinkClick={onFilterClick}>Active</FilterLink>
        {' | '}
        <FilterLink filter={SHOW_COMPLETED} currentFilter={visibilityFilter} onFilterLinkClick={onFilterClick}>Completed</FilterLink>
    </div>
);

export default Footer;