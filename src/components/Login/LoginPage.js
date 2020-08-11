import React, {useState} from "react";
import {connect} from 'react-redux';

import './Login.css'
import {authLogin} from "../../redux/Auth/authActions";

const LoginPage = ({loading, error, authLogin}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        authLogin(username, password);
        localStorage.setItem('username', username);
        setUsername('');
        setPassword('');
    };

    return (
        <div className='container'>
            <div className='mx-auto mt-5 login'>
                <h2 className='text-center'>Login Page</h2>
                <form className='form-group' onSubmit={handleSubmit}>
                    <input value={username} onChange={e => setUsername(e.target.value)} type="text"
                           placeholder='Username' className='form-control'/>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password"
                           placeholder='Password' className='form-control mt-2'/>
                    <button className='btn btn-success w-100 mt-2' type='submit'>
                        Login {loading &&
                    <div className="spinner-border spinner-border-sm text-primary" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>}
                    </button>
                </form>
                {error && <div className="alert alert-danger" role="alert">
                    Can not get access __---__ {error.message}
                </div>}
            </div>
        </div>
    )
};

const mapState = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        user: state.auth.user,
    }
};

export default connect(mapState, {authLogin})(LoginPage);