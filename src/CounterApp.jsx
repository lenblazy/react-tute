import { Component, useState, useEffect } from "react";

// class CounterApp extends Component {
//
//     state = {
//         count: 0
//     }
//
//     increment = () => {
//         this.setState({count: this.state.count + 1});
//     }
//
//     componentDidMount() {
//         document.title = `Clicked ${this.state.count} times`;
//     }
//
//     componentDidUpdate() {
//         document.title = `Clicked ${this.state.count} times`;
//     }
//
//
//
//     render() {
//         return (
//             <div>
//                 <h1>Counter App</h1>
//                 <button onClick={this.increment}>Clicked {this.state.count} times</button>
//             </div>
//         )
//     }
// }

const CounterApp = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Clicked ${count} times`;
    })

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counter App</h1>
            <button onClick={increment}>Clicked {count} times</button>
        </div>
    )
}

export default CounterApp;