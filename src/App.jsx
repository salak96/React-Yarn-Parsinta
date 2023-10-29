import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor() {
        super();

        this.state = {
            user: [],
        };
    }
    //axios get user
    getUser = async () => {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        this.setState({
            user: response.data,
        });
    };
    //call getUser
    componentDidMount() {
        this.getUser();
    }
    render() {
        //panggil state user
        const { user } = this.state;
        return (
            <div>
                <h1>My name is {user.name}</h1>
                <h1>My User name is {user.username}</h1>
                <h1>My email is {user.email}</h1>
            </div>
        );
    }
}

export default App;
