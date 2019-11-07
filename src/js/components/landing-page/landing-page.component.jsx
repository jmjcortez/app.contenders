import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import styled, { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../../constants/theme';
import Hero from './hero';
// import styles from "components/homepage/homepage.scss";

const StyledNavBar = styled(Navbar)`
  background-color: ${props => props.theme.colors.primary};
  position: fixed;
  top: 0%;
  transform: translate(0%, 0);
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

const Links = styled(Navbar.Brand)`
  color: ${props => props.login ? props.theme.colors.white : props.theme.colors.light} !important;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  line-height: 1.6;
`;

class LandingPage extends Component {
    render() {
        return (
          <div>
            <StyledNavBar>
              <StyledBrand className='mx-auto'>CONTENDERS</StyledBrand>
              <Nav>
                <Links href="login" login>Login</Links>
                <Links href="register">Register</Links>
              </Nav>
            </StyledNavBar>
            <Hero/>
          </div>
        );
      }
}

export default LandingPage;