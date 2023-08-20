import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './styles/SignUp.css';

const SignUp = () => {
    const navigate = useNavigate();
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showPasswords, setShowPasswords] = useState(false);
    const [registeredUser, setRegisteredUser] = useState('');

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: '',
            age: '',
            name: '',
            lastname: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string()
                .min(6, 'Must be at least 6 characters')
                .matches(/[a-zA-Z]/, 'Must contain at least one letter')
                .required('Required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Required'),
            age: Yup.number().min(18, 'You must be at least 18').max(120, 'Age cannot be more than 120').required('Required'),
            name: Yup.string().required('Required'),
            lastname: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push(values);
            localStorage.setItem('users', JSON.stringify(users));
            setRegisteredUser(values.name);
            setShowSuccessMessage(true);
        },
    });

    return (
        <>
            <NavBar />
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card col-md-6">
                    <div className="card-body">
                        <h2 className="text-center mb-4">SignUp</h2>
                        {showSuccessMessage ? (
                            <div className="alert alert-success text-center" role="alert">
                                <h4>Welcome, {registeredUser}!</h4>
                                <p>Registration successful! You can now access all our features.</p>
                                <button className="btn btn-primary mt-3" onClick={() => navigate('/login')}>
                                    Proceed to Login
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={formik.handleSubmit}>
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="name">Name:</label>
                                        <input type="text" id="name" name="name" placeholder="Enter your name" {...formik.getFieldProps('name')} className="form-control" />
                                        {formik.touched.name && formik.errors.name ? <div className="text-danger">{formik.errors.name}</div> : null}
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="lastname">Lastname:</label>
                                        <input type="text" id="lastname" name="lastname" placeholder="Enter your lastname" {...formik.getFieldProps('lastname')} className="form-control" />
                                        {formik.touched.lastname && formik.errors.lastname ? <div className="text-danger">{formik.errors.lastname}</div> : null}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" name="email" placeholder="Enter your email" {...formik.getFieldProps('email')} className="form-control" />
                                    {formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password">Password:</label>
                                    <div className="input-group">
                                        <input
                                            type={showPasswords ? 'text' : 'password'}
                                            id="password"
                                            name="password"
                                            placeholder="Enter your password"
                                            {...formik.getFieldProps('password')}
                                            className="form-control"
                                        />
                                        <div className="input-group-append">
                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary"
                                                onClick={() => setShowPasswords(!showPasswords)}
                                            >
                                                <i className={showPasswords ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
                                            </button>
                                        </div>
                                    </div>
                                    {formik.touched.password && formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword">Confirm Password:</label>
                                    <div className="input-group">
                                        <input
                                            type={showPasswords ? 'text' : 'password'}
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            placeholder="Confirm your password"
                                            {...formik.getFieldProps('confirmPassword')}
                                            className="form-control"
                                        />
                                    </div>
                                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                        <div className="text-danger">{formik.errors.confirmPassword}</div>
                                    ) : null}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="age">Age:</label>
                                    <input type="number" id="age" name="age" placeholder="Enter your age" {...formik.getFieldProps('age')} className="form-control" min="0" max="120" />
                                    {formik.touched.age && formik.errors.age ? <div className="text-danger">{formik.errors.age}</div> : null}
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Sign Up
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;