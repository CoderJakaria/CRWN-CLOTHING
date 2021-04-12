import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { auth, signInWithGoogle } from '../../Firebase/Firebase.utils';
import CustomButton from '../CustomButton/CustomButton';
import FormInput from '../FormInput/FormInput';
import './SignIn.css';

const SignIn = () => {
    const [state,setState] = useState({
        email: '',
        password: ''
    });

    const history = useHistory();

    const handleSubmit = async event =>{
        event.preventDefault();
        
        const {email, password} = state;
        try {
            await auth.signInWithEmailAndPassword(email,password);
            setState({email: '', password: ''})
            history.push('/')
        } catch (error) {
            console.log(error);
        }


    }

    const handleChange = event =>{
        const {value,name} = event.target
        setState((oldval)=>{
            return {...oldval, [name]: value }
        })
    }


    return (
        <div className='sign-in'>
            <h2 className='title'> I allready have an account </h2>
            <span>Sign in with you email and password</span>

            <form action="" onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    type="email" 
                    value={state.email} 
                    handleChange={handleChange} 
                    label="Email"
                    required
                    />
                

                <FormInput 
                     name="password" 
                     type="password" 
                     value={state.password} 
                     handleChange={handleChange} 
                     label="Password"
                     required

                     />

               <div className='buttons'>
                    <CustomButton type="submit"> Sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in Google </CustomButton>
               </div>
            </form>
        </div>
    )
}

export default SignIn
