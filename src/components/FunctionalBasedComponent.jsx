import React, {useContext} from "react";
import PropsExample from "../PropExample/index.jsx";
import NewChild from "../PropExample/newChild.jsx";
import {Context} from "../CounterApp.jsx";

const Child = () => {
    return (
        <p>Child arrow function component</p>
    )
}

function FunctionalBasedComponent() {

    const parentComponentHandler = () => console.log("Hello from Parent");

    const getValueFromChildComponent = (value) => console.log(value);

    const getValueFromContext = useContext(Context);
    console.log(getValueFromContext);

    return (
        <div>
            Hello from FunctionalBasedComponent
            <PropsExample parentComponentHandler={parentComponentHandler} flag={true} data="data as prop"/>
            <NewChild getValueFromChildComponent={getValueFromChildComponent} />
            <button style={{backgroundColor: getValueFromContext}}>Click me</button>
        </div>
    );
}

export default FunctionalBasedComponent;