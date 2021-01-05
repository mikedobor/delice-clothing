import React, { Component } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from  '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.actions'

import { SignUpContainer, SignUpTitle } from './sign-up.styles';


class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({[name]: value})
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        const { signUpStart } = this.props;

        if(password !== confirmPassword ) {
            alert(`Passwords don't match`);
            return;
        }

        signUpStart({ displayName, email, password })


    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <SignUpContainer>
                <SignUpTitle className='title'>I do not have an account</SignUpTitle>
                <span>Sign up with your email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} handleChange={this.handleChange} label='Display Name' required />
                    <FormInput type='email' name='email' value={email} handleChange={this.handleChange} label='Email' required />
                    <FormInput type='password' name='password' value={password} handleChange={this.handleChange} label='Password' required />
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} handleChange={this.handleChange} label=' Confirm Password' required />
                    
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp)