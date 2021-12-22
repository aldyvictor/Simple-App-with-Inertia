import React from "react";

import Guest from "../../Layouts/Guest";

import { Link } from "@inertiajs/inertia-react";

export default function Login() {
    return (
        <Guest title="Login">
            <div className="card">
                <div className="card-header">Login</div>
                <div className="card-body">Login Form</div>
                <div className="card-footer">
                    <Link href="/register">Register</Link>
                </div>
            </div>
        </Guest>
    );
}
