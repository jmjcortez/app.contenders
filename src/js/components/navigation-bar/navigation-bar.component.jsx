import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import styled from 'styled-components';

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
  color: ${props => props.white ? props.theme.colors.white : props.theme.colors.light} !important;
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  line-height: 1.6;
`;

const NavigationBar = props => {
  
  const { isAuthenticated } = props;

  return (
    <StyledNavBar>
      <StyledBrand className='mx-auto'>CONTENDERS</StyledBrand>
      <Nav>
        { !isAuthenticated ? (
            <div>
              <Links href="login" white>Login</Links>
              <Links href="register">Register</Links>
            </div>
          ) :
          (
            <div>
              <Links href="homepage" white>Home</Links>
              <Links href="/" white>Profile</Links>
              <Links href="/" white>Settings</Links>
            </div>
          )
        }
        
      </Nav>
    </StyledNavBar>
  )
};

export default NavigationBar;