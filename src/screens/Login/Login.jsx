import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/useAuth';
import NavBar from '../../components/NavBar/NavBar';

const Login = () => {
    const [loginError, setLoginError] = useState(null);
    const { authenticate } = useAuth();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: (values) => {
            if (!authenticate(values)) {
                setLoginError('Invalid email or password');
            }
        },
    });

    return (
        <>
            <NavBar />
            <div className="container d-flex justify-content-center align-items-center vh-100">
                <div className="card login-card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 animate__backInLeft">Login</h2>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email:</label>
                                <input type="email" id="email" name="email" {...formik.getFieldProps('email')} className="form-control" aria-label="Email" />
                                {formik.touched.email && formik.errors.email ? <div className="text-danger">{formik.errors.email}</div> : null}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password:</label>
                                <input type="password" id="password" name="password" {...formik.getFieldProps('password')} className="form-control" aria-label="Password" />
                                {formik.touched.password && formik.errors.password ? <div className="text-danger">{formik.errors.password}</div> : null}
                            </div>
                            {loginError && <div className="alert alert-danger" role="alert">{loginError}</div>}
                            <button type="submit" className="btn btn-primary btn-block">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;