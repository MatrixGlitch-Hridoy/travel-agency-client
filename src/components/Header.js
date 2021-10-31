import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Go-Far
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {user?.email && (
                <li>
                <Link className="nav-link me-2 " to="/my-bookings">My Bookings</Link>
                </li>
              )}
              {user?.email && (
                <li>
                <Link className="nav-link me-2 " to="/manage-bookings">Manage All Bookings</Link>
                </li>
              )}
              {user?.email && (
                <li>
                <Link className="nav-link me-2 " to="/add-hotel">Add Hotel</Link>
                </li>
              )}
              {user?.email && (
                <li className="my-auto fw-bold me-2 text-warning">{user.displayName}</li>
              )}
              {user?.email ? (
                <Link to="/">
                  <button className="btn btn-danger" onClick={logOut}>Logout</button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="btn btn-warning px-4 fw-bold">Sign In</button>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
