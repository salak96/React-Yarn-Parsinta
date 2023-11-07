import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');
 
      const handleSubmit = async (event) => {
        event.preventDefault();
        // Handle the login logic here
        try{
            await authenticate(username, password);
            <NavLink to='/dashboard' />       
        }catch{
            setError('Invalid username or password');
        }
      };

    return (
        <div className='container'>
            <div className='row justify-content-center align-items-center vh-100'>
                <div className='col-md-4'>
                    <div className='border p-4 rounded bg-light'>
                        <h2 className='text-center mb-4'>Login</h2>
                        <form onSubmit={handleSubmit}>
                            <label>Username:</label>
                            <input type='text' className='form-control' value={username} onChange={(e) => setUsername(e.target.value)} />
                            <div className='form-group'>
                                <label>Password:</label>
                                <input type='password' className='form-control'  value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className='d-grid'>
                                <button type='submit' value="Submit" className='btn btn-primary btn-block mt-4'>
                                    Login
                                </button>
                            {error && <p className='text-danger'>{error}</p>}
                                <button type='button' className='btn btn-danger btn-block mt-4'>
                                    <NavLink className={'text-decoration-none text-light'} to='/register'>
                                        Register
                                    </NavLink>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
