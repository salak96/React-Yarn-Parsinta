import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from './components/Form';
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
            <div className='container d-flex flex-column align-items-center justify-content-center' style={{ minHeight: '100vh' }}>
                <div className='p-2'>
                    <h1>Call api jsonplaceholder</h1>
                    <h1>My name is {user.name}</h1>
                    <h1>My User name is {user.username}</h1>
                    <h1>My email is {user.email}</h1>
                    <Form />
                </div>
            </div>
        );
    }
}

export default App;
