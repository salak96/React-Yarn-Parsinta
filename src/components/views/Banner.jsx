import React from 'react';
import { NavLink } from 'react-router-dom';

const Banner = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="ml-auto">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
      </div>
      <NavLink className="navbar-brand" to="/">
        Your App
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="flex justify-content-end collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact activeClassName="text-danger" className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="text-danger" className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="text-danger" className="nav-link" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />  
        </form>

      </div>
    </nav>
  );
};

export default Banner;
