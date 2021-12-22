import React from "react";

import App from "../Layouts/App";

export default function Home(props) {
    return (
        <App title="Div">
            <div className="container">
                <div className="card">
                    <div className="card-header">{props.username}</div>
                    <div className="card-body">My name is {props.username}</div>
                </div>
            </div>
        </App>
    );
}
