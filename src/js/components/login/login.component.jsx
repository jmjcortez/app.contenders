import React from "react";
import { Field, reduxForm } from "redux-form";
import { Redirect } from 'react-router-dom';

const Login = props => {
    const { handleSubmit, pristine, submitting, reset, token } = props

    if (window.localStorage.getItem("JWT")) {
        return <Redirect to={{pathname: "/homepage"}} />
    };

    return (
        <form onSubmit={handleSubmit}>
            { token }
            <div>
                <label>Email</label>
            </div>
            <div>
            <Field
                name="email"
                component="input"
                type="email"
                placeholder="Email"
            />
            </div>
            <div>
                <label>Password</label>
            </div>
            <div>
                <Field 
                    name="password" 
                    type="password" 
                    component="input" 
                    label="Password"
                />
            </div>
            <button type="submit" disabled={pristine || submitting}>
                Submit
            </button>
            <button type="button" disabled={pristine || submitting} onClick={reset}>
                Clear Values
            </button>
        </form>
    )
}

export default reduxForm({
    form: 'login' // a unique identifier for this form
})(Login);