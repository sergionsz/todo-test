import React from 'react';
import { Link } from 'react-router';

const FilterLink = ({ filter, activeClassName, children }) => (
  <Link
    to={filter === 'all' ? '' : filter}
    activeClassName={activeClassName}
  >
    {children}
  </Link>
);

export default FilterLink;
