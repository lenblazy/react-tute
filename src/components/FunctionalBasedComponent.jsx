import React from "react";

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
        </div>
    );
}

export default FunctionalBasedComponent;