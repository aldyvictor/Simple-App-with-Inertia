import React from "react";

import { Head } from "@inertiajs/inertia-react";

export default function App({ children, title }) {
    return (
        <div>
            <Head title={title} />

            {children}
        </div>
    );
}
