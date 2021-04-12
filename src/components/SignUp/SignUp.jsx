import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import "./signUp.css";
import { auth, createUserProfileDocument } from "../../Firebase/Firebase.utils";


const SignUp = () => {
    const [state,setState] = useState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleSubmit = async event => {
        event.preventDefault();
        const {displayName,email,password,confirmPassword} = state;

        if ( password !== confirmPassword ) {
            alert("Password dont match!");
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email,password);

            await createUserProfileDocument(user, {displayName});

            setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })

        } catch (error) {
           console.log(error);
        }

    };


    const handleChange = event => {
        const {value,name} = event.target;
        console.log(name,value)

        setState((oldval)=>{
            return {...oldval, [name]: value }
        })
    }

    const {displayName,email,password,confirmPassword} = state;
    return (
        <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form action="" className="sign-up-form" onSubmit={handleSubmit}>
               <FormInput
                 type="text"
                 name="displayName"
                 value={displayName}
                 onChange={handleChange}
                 label="Display Name"
                 required
               />
               <FormInput
                 type="email"
                 name="email"
                 value={email}
                 onChange={handleChange}
                 label="Email"
                 required
               />
               <FormInput
                 type="password"
                 name="password"
                 value={password}
                 onChange={handleChange}
                 label="Password"
                 required
               />
               <FormInput
                 type="password"
                 name="confirmPassword"
                 value={confirmPassword}
                 onChange={handleChange}
                 label="Confirm Password"
                 required
               />

               <CustomButton type="submit"> SIGN UP </CustomButton>
            </form>
        </div>
    )
}

export default SignUp