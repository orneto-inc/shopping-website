import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { StarRateSharp } from '@material-ui/icons';



function Login() {
    // Creating constants for storing User Item history, email, password & managing its State.
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <div className="login__logo">
                <h2>Come Shop</h2>
                </div>
            </Link>

            <div className='login__container'>
                <h1>Sign-in / Register</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the FAKE SHOPPING WEBSITE Conditions of Use & Sale. Please
                    use your GOOGLE ACCOUNT to Login/Create and Shop.
                </p>

                <button onClick={register} className='login__registerButton'>New User register Here</button>
            </div>
        </div>
    )
}

export default Login
