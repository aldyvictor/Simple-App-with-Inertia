import React from "react";
import Navbar from "../Components/Navbar";

import { Head } from "@inertiajs/inertia-react";

export default function App({ children, title }) {
    return (
        <div>
            <Head title={title} />
            <Navbar />
            {children}
        </div>
    );
}
