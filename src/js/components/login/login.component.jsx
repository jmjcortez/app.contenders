import React from "react";
import { Field, reduxForm } from "redux-form";
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 25px;
`;

const FormWrapper = styled.div`
    max-width: 535px;
    padding: 64px 48px;
    background-color: ${props => props.theme.colors.pink}
    margin: auto;
`;

const StyledTitle = styled.h1`
    font-size: 48px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
    color: ${props => props.theme.colors.black} !important;
    text-align: center;
`;

const Underline = styled.span`
    width: 73px;
    height: 4px;
    margin: 8px auto 0;
    display: block;
    background-color: ${props => props.theme.colors.light};
`;

const Subtitle = styled.div`
    font-size: 14px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
    line-height: 1.33;
    text-align: center;
    color: ${props => props.theme.colors.black} !important;
    margin-bottom: 48px;
    margin-top: 14px;
`;

/*
const Login = props => {
    const { handleSubmit, pristine, submitting, reset, token } = props

    if (window.localStorage.getItem("JWT")) {
        return <Redirect to={{pathname: "/homepage"}} />
    };

    return (
        <Container>
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
        </Container>
    )
} */

const Login = props => {
    return (
        <Container>
            <FormWrapper>
                <StyledTitle>LOG IN</StyledTitle>
                <Underline />
                <Subtitle>Not a member yet? Sign Up here</Subtitle>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>  
                        <Form.Control type="email" />
                        <Form.Text className="text-muted">
                        Required
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"/>
                    </Form.Group>
                        <Form.Text className="text-muted">
                            Required
                        </Form.Text>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </FormWrapper>
        </Container>
    )

};

export default reduxForm({
    form: 'login' // a unique identifier for this form
})(Login);