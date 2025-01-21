import React from "react";

const NewChild = (props) => {

    const {getValueFromChildComponent} = props;

    const handleClick = () => {
      const count = 5;
      getValueFromChildComponent(`Added and returned by child ${count + 1}`);
    };

    return (
        <div>
            <button onClick={handleClick}>Add stuff</button>
        </div>
    )
}

export default NewChild;