/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <nav className="navbar navbar-expand-lg navbar-ligh  bg-primary-subtle">
      <div className="container">
        <Link className="navbar-brand" to="/Home">
          FULLSTACK CRUD
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success " type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
