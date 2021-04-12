import React, { useState, useContext } from "react";
import styled from "styled-components";

import firebaseApp from "./../firebase/firebaseConfig";
import AuthContext from 'auth/AuthContext'

import FormInput from "./../components/forms/FormInput";
import Button from "./../components/buttons/Button";
import { Redirect } from "react-router";

const RegisterPageStyles = styled.div` 
max-width: 480px;
margin: 6rem auto 0;
header{
    text-align:center;
    margin-bottom: 2rem;
}
    h1{
        font-size: 2rem;
        font-weight:600;
    }
    .jimo{
        background:grey;
    }
    button{
        margin-top:2rem;
    }
     

`

const RegisterPage = (props) => {

    const [email, setEmail] = useState("james@home.com");
    const [password, setPassword] = useState("123456");
    const [isValid, setIsValid] = useState(false);

    const handleSignup = (e) => {
        firebaseApp
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                setIsValid(true);
            })
            .catch((error) => {
                console.log(error.code, error.message);
            });
    };
    if (isValid) {
        return <Redirect to="/login" />;
    } else {
        return (
            <RegisterPageStyles>

                <header>
                    <h1>Unlimited Trial Account</h1>
                    <p>no credit card required</p>
                </header>


                <FormInput inputType="text" label="name on the account" />
                <FormInput inputType="email" label="valid email address"
                    onChange={(e) => setEmail(e.target.value.trim())} />
                <FormInput inputType="password" label="password (8 charachters)"
                    onChange={(e) => setPassword(e.target.value.trim())} />

                <Button label="create a new account" uiStyle="login" onClick={handleSignup} />

            </RegisterPageStyles>

        );
    }
}

export default RegisterPage;

