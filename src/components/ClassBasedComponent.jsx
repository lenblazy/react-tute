import React, {Component} from "react";

class ClassBasedComponent extends Component {

    state = {
        // write all state properties inside of this
        count: 0,
        flag: false
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

    componentDidMount() {
        console.log('Component is mounted');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (prevState && prevState.count !== this.state.count && this.state.count === 10) {
            this.setState({
                flag: true
            })
        }

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                Hellow ClassBasedComponent
                <button onClick={this.handleClick}>Click me</button>
                {
                    this.state.count === 5 && "Count is 5"
                }
                {
                    this.state.flag && <p>Flag is true</p>
                }
            </div>
        );
    }
}

export default ClassBasedComponent;