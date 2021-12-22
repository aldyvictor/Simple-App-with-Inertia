import React from "react";

import { Head, Link } from "@inertiajs/inertia-react";

export default function App({ children, title }) {
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <Head title={`${title} | Div`} />

            <div className="col-md-4">{children}</div>
        </div>
    );
}
