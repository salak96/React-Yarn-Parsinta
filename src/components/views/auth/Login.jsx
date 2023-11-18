import React, { useState } from 'react';
import { NavLink, useNavigate  } from 'react-router-dom';


const Login = () => {
    let navigate = useNavigate();
    const [loginForm, setLoginForm] = useState({
        username :null,
        password: null
    })
    const [error, setError] = useState('');
    const dataStorage = JSON?.parse(localStorage?.getItem("userData"))
 
      const handleSubmit = async (event) => {
        event.preventDefault();
        if((loginForm.username ===dataStorage.username  ||loginForm.username ===dataStorage.email  )  && loginForm.password === dataStorage.password ){
            localStorage.setItem('auth', true)
            navigate('/dashboard')
        }else{
            localStorage.setItem('auth', false)
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
                            <input type='text' className='form-control' value={loginForm.username} onChange={(e) => setLoginForm({...loginForm, username: e.target.value})} />
                            <div className='form-group'>
                                <label>Password:</label>
                                <input type='password' className='form-control'  value={loginForm.password} onChange={(e) => setLoginForm({...loginForm, password: e.target.value})} />
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
