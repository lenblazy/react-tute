import React, {Component} from "react";
import ClassBasedComponent from "./components/ClassBasedComponent.jsx";
import FunctionalBasedComponent from "./components/FunctionalBasedComponent.jsx";
import ApiLoaderComponent from "./components/ApiLoaderComponent.jsx";

class Application extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let name = 'Lennox';

        return (
            <div>
                <h1>Hello {name}!</h1>
                <span>This</span>
                <ClassBasedComponent />
                <FunctionalBasedComponent />
                <br /> <br />
                <ApiLoaderComponent />
            </div>
        );
    }

}

export default Application;