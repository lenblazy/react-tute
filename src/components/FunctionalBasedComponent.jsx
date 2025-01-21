import React from "react";
import PropsExample from "../PropExample/index.jsx";

const Child = () => {
    return (
        <p>Child arrow function component</p>
    )
}

function FunctionalBasedComponent() {
    return (
        <div>
            <Child />
            Hello from FunctionalBasedComponent
            <PropsExample flag={true} data="data as prop"/>
        </div>
    );
}

export default FunctionalBasedComponent;