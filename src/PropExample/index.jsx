import React from "react";

const PropsExample = (props) => {
    console.log(props);
    const { flag, data } = props;

    return (
        <div>
            {
                flag ? data : "flags is false"
            }
        </div>
    )
}

export default PropsExample;