import React, {Component} from "react";

class ClassBasedComponent extends Component {

    state = {
        // write all state properties inside of this
        count: 0,
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // write all state properties inside of this
    //         count: 0,
    //     };
    //     this.handleClick = this.handleClick.bind(this);
    // }

    handleClick = () => {
        const {count} = this.state;
        this.setState({
            count: count + 1,
        }, () => console.log(count));
    }

    render() {
        return (
            <div>
                Hellow ClassBasedComponent
                <button onClick={this.handleClick}>Click me</button>
                {
                    this.state.count === 5 && "Count is 5"
                }
            </div>
        );
    }
}

export default ClassBasedComponent;