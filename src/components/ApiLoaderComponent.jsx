import React, {Component} from "react";
import axios from "axios";

class ApiLoaderComponent extends Component {

    state = {
        users: []
    }

    getUsers = () => {
        axios('https://api.randomuser.me/?nat=KE&results=5')
            .then(res => {
                this.setState({
                    users: res.data.results
                });
            })
    }

    componentDidMount() { //make api calls before component mounts
        this.getUsers()
    }

    render() {
        return (
            <div>
                <h1>To load Api components</h1>
                <ul style={{ listStyleType: "none" }}>
                    { this.state.users.map(user =>
                        (
                            <li key={user.email}>{user.cell}</li>
                        )
                    )}
                </ul>

            </div>
        );
    }
}

export default ApiLoaderComponent;