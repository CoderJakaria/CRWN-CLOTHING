import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import './SignIn-SignUp.css';

const SignInSignUp = () => {
    return (
        <div className='signIn-signUp'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInSignUp
