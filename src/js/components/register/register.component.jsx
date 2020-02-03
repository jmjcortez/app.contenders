import React from 'react';
import styled from 'styled-components';
import { Form, Button, Col, Toast } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';

import { FieldInput } from '../form-fields';

//PUT THESE INTO A COMMON FILE
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

export const Register = props => {
  const { handleSubmit, isLoading, error } = props;
  
  return (
    <Container>
      {error ? <Toast>
        <Toast.Header>Error</Toast.Header>
        <Toast.Body>Invalid input!</Toast.Body>
      </Toast> : null} 
      <FormWrapper>
        <StyledTitle>REGISTER</StyledTitle>
        <Underline />
        <Subtitle>
          Already a member? <Link href='login'>Log in here</Link>
        </Subtitle>
        {/* ADD VALIDATOR */}
        <Form onSubmit={handleSubmit}>
          <Form.Row controlId="formBasicName">
            <Col>
              <FormLabel>First name</FormLabel>  
              <Field 
                  name='first_name'
                  type='input' 
                  component={FieldInput}
              />
              <Form.Text className="text-muted">
              Required
              </Form.Text>
            </Col>

            <Col>
              <FormLabel>Last name</FormLabel>  
              <Field 
                  name='last_name'
                  type='input' 
                  component={FieldInput}
              />
            </Col>
          </Form.Row>

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
          <StyledButton variant="primary" type="submit" block disabled={isLoading}>
              Submit
          </StyledButton>
        </Form>
      </FormWrapper>
    </Container>
  )
};

export default reduxForm({
  form: 'register'
})(Register);