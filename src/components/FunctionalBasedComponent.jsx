import React from "react";
import PropsExample from "../PropExample/index.jsx";
import NewChild from "../PropExample/newChild.jsx";

const Child = () => {
    return (
        <p>Child arrow function component</p>
    )
}

function FunctionalBasedComponent() {

    const parentComponentHandler = () => console.log("Hello from Parent");

    const getValueFromChildComponent = (value) => console.log(value);

    return (
        <div>
            Hello from FunctionalBasedComponent
            <PropsExample parentComponentHandler={parentComponentHandler} flag={true} data="data as prop"/>
            <NewChild getValueFromChildComponent={getValueFromChildComponent} />
        </div>
    );
}

export default FunctionalBasedComponent;