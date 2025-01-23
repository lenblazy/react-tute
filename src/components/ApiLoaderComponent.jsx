import React, {Component} from "react";
import axios from "axios";
import Loading from "./Loading.jsx";

class ApiLoaderComponent extends Component {

    state = {
        users: [],
        loading: false,
    }

    getUsers = () => {
        this.setState({loading: true});
        axios('https://api.randomuser.me/?nat=KE&results=5')
            .then(res => {
                this.setState({
                    users: [...this.state.users, ...res.data.results],
                    loading: false
                });
            })
    }

    componentDidMount() { //make api calls before component mounts
        this.getUsers()
    }

    newHandleSubmit = (event) => {
        event.preventDefault();
        this.getUsers();
    }

    render() {
        const {loading, users} = this.state;

        return (
            <div>
                <h1>To load Api components</h1>
                {
                    !loading ? <div>
                            <form onSubmit={this.newHandleSubmit}>
                                <input type={'submit'} value={'load users'}/>
                            </form>

                            <ul style={{listStyleType: "none"}}>
                                {users.map(user =>
                                    (
                                        <li key={user.email}>
                                            <h4>{user.name.first}</h4>
                                            <p>{user.email}</p>
                                            <hr/>
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                        : <Loading message="Loading data..."/>
                }

            </div>
        );
    }
}

export default ApiLoaderComponent;