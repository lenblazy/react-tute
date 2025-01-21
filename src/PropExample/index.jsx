import React from "react";

const PropsExample = (props) => {
    console.log(props);
    const { flag, data, parentComponentHandler } = props;

    return (
        <div>
            {
                flag ? data : "flags is false"
            }
            <button onClick={parentComponentHandler}>Click Me</button>
        </div>
    )
}

export default PropsExample;