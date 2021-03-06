import React from 'react';

import {SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE} from '../js/constants/action-types';

import FilterLink from './FilterLink';

const Footer = () => (
    <div>
        Show:
        {' '}
        <FilterLink filter={SHOW_ALL}>All</FilterLink>
        {' | '}
        <FilterLink filter={SHOW_ACTIVE}>Active</FilterLink>
        {' | '}
        <FilterLink filter={SHOW_COMPLETED}>Completed</FilterLink>
    </div>
);

export default Footer;