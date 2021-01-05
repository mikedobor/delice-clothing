import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';


import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'

import { SignInContainer, SignInTitle, ButtonsContainer } from './sign-in.styles';
 

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value})
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStarts } = this.props;
        const { email, password } = this.state;

        emailSignInStarts(email, password)

    }

    render() {
        const { googleSignInStarts } = this.props;
        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' value={this.state.email} handleChange={this.handleChange} label='Email' required />
                    <FormInput type='password' name='password' value={this.state.password} handleChange={this.handleChange} label='Password' required />
                    <ButtonsContainer>
                        <CustomButton type="submit" >Sign in</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStarts} isGoogleSignIn>Sign in with Google</CustomButton>
                    </ButtonsContainer>

                </form>
            </SignInContainer>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStarts: () => dispatch(googleSignInStart()),
    emailSignInStarts: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);