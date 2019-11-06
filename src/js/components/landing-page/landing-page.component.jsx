import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import styled, { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../../constants/theme';
import Hero from './hero';
// import styles from "components/homepage/homepage.scss";

const StyledNavBar = styled(Navbar)`
  background-color: ${props => props.theme.colors.primary};
`;

const StyledBrand = styled(Navbar.Brand)`
  color: ${props => props.theme.colors.white} !important;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  line-height: 1.6;
  text-transform: uppercase;
`;

const LoginLink = styled(Navbar.Brand)`
  color: ${props => props.theme.colors.white} !important;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  line-height: 1.6;
`;

const RegisterLink = styled(Navbar.Brand)`
  color: #fd4d2e !important;
  font-size: 100px;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  line-height: 1.6;
`;

class LandingPage extends Component {
    render() {
        return (
          <ThemeProvider theme={defaultTheme}>
            <StyledNavBar>
              <StyledBrand className='mx-auto'>CONTENDERS</StyledBrand>
              <Nav>
                <LoginLink href="login">Login</LoginLink>
                <RegisterLink href="register">Register</RegisterLink>
              </Nav>
            </StyledNavBar>
            <Hero />
          </ThemeProvider>
        );
      }
}

export default LandingPage;