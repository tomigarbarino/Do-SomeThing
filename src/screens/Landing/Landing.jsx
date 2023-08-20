import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="d-flex justify-content-center align-items-center vh-100 text-center">
            <div className="container">
                <h1 className="display-4 animate__animated animate__fadeInDown">Welcome to Do Something!</h1>
                <p className="lead animate__animated animate__fadeIn">Ready to find exciting activities to do?</p>
                <div className="animate__animated animate__fadeInUp">
                    <Link to="/login" className="btn btn-primary m-2" role="button" aria-label="Log in">
                        Log In
                    </Link>
                    <Link to="/signup" className="btn btn-success m-2" role="button" aria-label="Sign up">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Landing;