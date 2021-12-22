import React, { useState } from "react";

import Guest from "../../Layouts/Guest";

import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Login({ errors }) {
    const [values, setValues] = useState({
        email: "",
        password: "",
        remember: "",
    });

    const changeHandler = (e) => {
        setValues({
            ...values,
            [e.target.id]: e.target.value,
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        Inertia.post("/login", values);
        console.log(errors);
    };

    return (
        <>
            <div className="card">
                <div className="card-header">Login</div>
                <div className="card-body">
                    <form onSubmit={submitHandler} noValidate>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-tabel">
                                Email
                            </label>
                            <input
                                value={values.email}
                                onChange={changeHandler}
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                            />
                            {errors && (
                                <div className="text-danger mt-1">
                                    {errors.email}
                                </div>
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-tabel">
                                Password
                            </label>
                            <input
                                value={values.password}
                                onChange={changeHandler}
                                type="password"
                                id="password"
                                name="password"
                                className="form-control"
                            />
                            {errors && (
                                <div className="text-danger mt-1">
                                    {errors.password}
                                </div>
                            )}
                        </div>
                        <div className="form-check mb-3">
                            <input
                                value={values.remember}
                                onChange={(e) =>
                                    setValues({
                                        ...values,
                                        remember: e.target.checked,
                                    })
                                }
                                type="checkbox"
                                name="remember"
                                id="remember"
                                className="form-check-input"
                            />
                            <label
                                htmlFor="remember"
                                className="form-check-label"
                            >
                                Remember Me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </form>
                </div>
                <div className="card-footer">
                    <Link href="/register">Register</Link>
                </div>
            </div>
        </>
    );
}

Login.layout = (page) => <Guest children={page} title="Login"></Guest>;
