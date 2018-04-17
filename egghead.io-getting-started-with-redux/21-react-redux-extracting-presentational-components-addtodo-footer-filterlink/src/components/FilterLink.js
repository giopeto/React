import React from 'react';

const FilterLink = ({filter, currentFilter, children, onFilterLinkClick}) => {

    if (filter === currentFilter) {
        return (
            <span>{children}</span>
        );
    }

    return (
        <a href={'#'} onClick={event => {
            event.preventDefault();
            onFilterLinkClick(filter);
        }}>{children}</a>
    );
};

export default FilterLink;