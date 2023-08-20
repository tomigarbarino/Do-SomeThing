import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './styles/NavBar.css';

const NavBar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const path = location.pathname;

    return (
        <nav className="navbar navbar-expand-md navbar-light bg-transparent fixed-top">
            <div className="container">
                <Link className="navbar-brand text-dark" to="/">Do-SomeThing</Link>
                <div className="ms-auto">
                    {path === '/home' || path === '/activities' ? (
                        <button className="btn btn-link nav-link text-dark" onClick={() => navigate('/')}>Sign off</button>
                    ) : (
                        <>
                            {path !== '/login' && (
                                <Link className="nav-link text-dark" to="/login">Login</Link>
                            )}
                            {path !== '/signup' && (
                                <Link className="nav-link text-dark" to="/signup">SignUp</Link>
                            )}
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
