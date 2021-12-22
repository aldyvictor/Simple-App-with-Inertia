import React from "react";

import App from "../Layouts/App";

export default function Home(props) {
    return <App title="Div">My name is {props.username}</App>;
}
