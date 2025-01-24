import React, {useContext, useReducer} from "react";
import PropsExample from "../PropExample/index.jsx";
import NewChild from "../PropExample/newChild.jsx";
import {Context} from "../CounterApp.jsx";

//useState
//useEffect
//useContext
//useReducer
//useRef

const Child = () => {
    return (
        <p>Child arrow function component</p>
    )
}

const initialState = {flag: false};

const reducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_BUTTON":
            console.log(state, action);
            return {
                ...state,
                flag: !state.flag,
            };
        default:
            return state;
    }
}

function FunctionalBasedComponent() {

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state);

    const parentComponentHandler = () => console.log("Hello from Parent");

    const getValueFromChildComponent = (value) => console.log(value);

    const getValueFromContext = useContext(Context);
    console.log(getValueFromContext);

    return (
        <div>
            Hello from FunctionalBasedComponent
            <PropsExample parentComponentHandler={parentComponentHandler} flag={true} data="data as prop"/>
            <NewChild getValueFromChildComponent={getValueFromChildComponent}/>
            <br /><br />
            <button style={{backgroundColor: getValueFromContext}}>Click me</button>
            <br /><br />
            <button onClick={() => dispatch({type: 'TOGGLE_BUTTON'})}>Toggle</button>
        </div>
    );
}

export default FunctionalBasedComponent;