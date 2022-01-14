import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/" exact>
        home
      </NavLink>

      <NavLink to="/report" exact>
        report
      </NavLink>
    </nav>
  );
};
