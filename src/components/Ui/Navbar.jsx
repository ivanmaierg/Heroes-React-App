/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import AuthContext from '../../auth/AuthContext';
import types from '../../types/types';

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const history = useHistory();
  const handleLogout = () => {
    const action = {
      type: types.logout,
    };
    dispatch(action);
    history.replace('/login');
  };
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
        </ul>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          {user.name !== undefined ? (
            <span className="nav-item nav-link text-info">{`Hello ${user.name}`}</span>
          ) : (
            <span className="nav-item nav-link text-info" />
          )}
          <button
            type="button"
            className="nav-item nav-link btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
