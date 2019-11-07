import React, { Component } from "react";
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import { bgImg } from '../../../constants/apis';

const StyledContainer = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImg});
    width: 100%;
    height: 500px;
    padding-top: 100px;
`;

const StyledTitle = styled.h1`
    font-size: 48px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 700;
    line-height: 1;
    text-transform: uppercase;
    color: ${props => props.theme.colors.white} !important;
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
    font-size: 20px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 300;
    line-height: 1.33;
    text-align: center;
    color: ${props => props.theme.colors.white} !important;
    margin-top: 100px;
`;

const RegisterContainer = styled.div`
    text-align: center;
`;

const RegisterButton = styled(Button)`
    margin-top: 32px;
    background-color: ${props => props.theme.colors.primary} !important;
    border-color: ${props => props.theme.colors.primary} !important;
`;

const Text = styled.p`
    font-size: 14px;
    font-family: 'Work Sans', sans-serif;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 20px;
    color: ${props => props.theme.colors.white};
`;

class Hero extends Component {
    render() {
        return (
            <StyledContainer>
                <StyledTitle>Be the best</StyledTitle>
                <Underline />
                <Subtitle>Punch, kick, grapple whatever you wanna do you can do here. Meet awesome people and be the best version of yourself</Subtitle>
                <RegisterContainer>
                    <RegisterButton size='lg' href='register'>Register</RegisterButton>
                    <Text>Discover the experience</Text>
                </RegisterContainer>
            </StyledContainer>
        );
      }
}

export default Hero;