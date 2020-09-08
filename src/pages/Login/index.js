import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { auth } from '../../services/firebase';

import './styles.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const history = useHistory();

    const login = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            })
            .catch((e) => alert(e.message));
    }

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                auth.user.updateProfile({
                    displayName: username
                })
                history.push('/');
            })
            .catch((e) => alert(e.message));
    }
    return (
        <div className="container">
            <Link to='/'>
                <img
                    className='login__logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                    alt="Amazon Logo"
                />
            </Link>

            <div className="login__container">
                <h1>Sign In</h1>

                <form>
                    <h5>Username</h5>
                    <input value={username} onChange={e => setUsername(e.target.value)} type="text" />
                    <h5>E-mail</h5>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password" />
                    <button onClick={login} className='signIn__button' type='submit'>Sign in</button>
                </form>

                <p>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, ours cookies notice and our interest-Based Ads Notice.</p>
                <button onClick={register} className='register__button'>Create your Amazon Account</button>
            </div>
        </div>
    );
}

export default Login;