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
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink   className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink  className="nav-link" to="/dashboard">
              Dashboard
            </NavLink>
          </li>
        </ul>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-warning" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Banner;
