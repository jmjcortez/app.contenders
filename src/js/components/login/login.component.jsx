import React from "react";
import { Field, reduxForm } from "redux-form";
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

import { FieldInput } from '../form-fields';

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
    font-family: ${props => props.theme.fonts.roboto.fontFamily};
    font-weight: 300;
    line-height: 1.33;
    text-align: center;
    color: ${props => props.theme.colors.black} !important;
    margin-bottom: 48px;
    margin-top: 14px;
`;


const Link = styled.a`
    color: ${props => props.theme.colors.black} !important;
    text-decoration: underline;
`;

const FormLabel = styled(Form.Label)`
    font-family: ${props => props.theme.fonts.roboto.fontFamily};
`;

const StyledButton = styled(Button)`
    margin-top: 30px;
    background-color: ${props => props.theme.colors.light} !important;
    border-color: ${props => props.theme.colors.light} !important;
`;

export const Login = props => {
    const { handleSubmit } = props
    
    if (window.localStorage.getItem("JWT")) {
        return <Redirect to={{pathname: "/homepage"}} />
    };

    return (
        <Container>
            <FormWrapper>
                <StyledTitle>LOG IN</StyledTitle>
                <Underline />
                <Subtitle>
                    Not a member yet? <Link href='register'>Sign Up here</Link>
                </Subtitle>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <FormLabel>Email</FormLabel>  
                        <Field 
                            name='email'
                            type='email' 
                            component={FieldInput}
                        />
                        <Form.Text className="text-muted">
                        Required
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Field 
                            name='password'
                            type='password' 
                            component={FieldInput}
                        />
                    </Form.Group>
                        <Form.Text className="text-muted">
                            Required
                        </Form.Text>
                    <StyledButton variant="primary" type="submit" block>
                        Submit
                    </StyledButton>
                </Form>
            </FormWrapper>
        </Container>
    )

};

export default reduxForm({
    form: 'login' // a unique identifier for this form
})(Login);