import {Component} from "react";

class CounterApp extends Component {

    state = {
        count: 0
    }

    increment = () => {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div>
                <h1>Counter App</h1>
                <button onClick={this.increment}>Clicked {this.state.count} times</button>
            </div>
        )
    }
}

export default CounterApp;