import { Button } from '@mui/material';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';
import React from 'react';
import './Login.css';
import { useStateValue } from '../ContextApi/StateProvider';
import { actionTypes } from '../ContextApi/reducer';

const Login = () => {
    const [state, dispatch] = useStateValue();
    console.log(state);

    const signIn = async () => {
        signInWithPopup(auth, provider)// signInWithPopup is a function that takes two arguments: auth and provider
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                })
            }).catch((error) => {
                alert(error.message)
            });
    };
    return (
        <div className='login'>
            <div className="login_container">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp Logo"
                    // width={200}
                />
                <div className="login_text">
                    <h1>Sign in to WhatsApp</h1>
                </div>
                <Button onClick={signIn}>Sign In With Google</Button>
            </div>
        </div>
    )
}

export default Login;