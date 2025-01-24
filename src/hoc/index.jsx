import {Component} from "react";

const HOC = (OriginalComponent) => {
    return class NewComponent extends Component {
        render() {
            return (
                <OriginalComponent />
            )
        }
    }
}

export default HOC;