import React from "react";
import PropsExample from "../PropExample/index.jsx";

const Child = () => {
    return (
        <p>Child arrow function component</p>
    )
}

function FunctionalBasedComponent() {

    const parentComponentHandler = () => console.log("Hello from Parent");

    return (
        <div>
            <Child />
            Hello from FunctionalBasedComponent
            <PropsExample parentComponentHandler={parentComponentHandler} flag={true} data="data as prop"/>
        </div>
    );
}

export default FunctionalBasedComponent;