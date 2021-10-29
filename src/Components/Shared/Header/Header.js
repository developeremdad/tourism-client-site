import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink className="navbar-brand text-primary me-5 fs-4 fw-bold" to="/home">BLUE TOURISM</NavLink>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active text-dark fw-bold" aria-current="page" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold" to="/myOrders">My Orders</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold" to="/manages">Manages All</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold" to="/experts">Experts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-dark fw-bold" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Find Course" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;