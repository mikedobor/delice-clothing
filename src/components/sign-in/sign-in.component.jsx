import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import { SignInContainer, SignInTitle, ButtonsContainer } from './sign-in.styles';
 

const SignIn = ({emailSignInStarts, googleSignInStarts}) => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' })

    const handleChange = event => {
        const { name, value } = event.target;

        setUserCredentials({...userCredentials, [name]: value})
    }

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();

        emailSignInStarts(email, password)

    }

        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput type='email' name='email' value={email} handleChange={handleChange} label='Email' required />
                    <FormInput type='password' name='password' value={password} handleChange={handleChange} label='Password' required />
                    <ButtonsContainer>
                        <CustomButton type="submit" >Sign in</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStarts} isGoogleSignIn>Sign in with Google</CustomButton>
                    </ButtonsContainer>

                </form>
            </SignInContainer>
        );
}

const mapDispatchToProps = dispatch => ({
    googleSignInStarts: () => dispatch(googleSignInStart()),
    emailSignInStarts: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);