import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container">
                <Link to="/NowPlaying" className="navbar-brand"> Movies</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navBar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/NowPlaying">Now Playing</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/AddReview">Add Review</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
//bootstrap navBar with links to NowPlaying(MovieList) and Add Review Form
export default NavBar;
