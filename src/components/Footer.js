import React from 'react';
import FilterLink from './FilterLink';
import { activeFilter as activeClassName } from '../constants/css'

const Footer = () => (
  <div>
    <FilterLink filter="all" activeClassName={activeClassName}>All</FilterLink>
    <FilterLink filter="pending" activeClassName={activeClassName}>Pending</FilterLink>
    <FilterLink filter="completed" activeClassName={activeClassName}>Completed</FilterLink>
  </div>
);

export default Footer;
