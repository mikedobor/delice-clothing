import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';

import './sign-in.styles.scss';

export default class SignIn extends Component {
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

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type='email' name='email' value={this.state.email} handleChange={this.handleChange} label='Email' required />
                    <FormInput type='password' name='password' value={this.state.password} handleChange={this.handleChange} label='P assword' required />

                    <input type="submit" value="Submit Form"/>
                </form>
            </div>
        );
    }
}