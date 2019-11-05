import React, { Component } from "react";
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';

import { defaultTheme } from '../../constants/theme';
// import styles from "components/homepage/homepage.scss";

const StyledNavBar = styled(Navbar)`
  background-color: ${props => props.theme.colors.primary};
`;

const StyledBrand = styled(Navbar.Brand)`
  color: ${props => props.theme.colors.white} !important;
`;

class LandingPage extends Component {
    render() {
        return (
          <StyledNavBar theme={defaultTheme}>
            <StyledBrand theme={defaultTheme}>CONTENDERS</StyledBrand>
          </StyledNavBar>
        );
      }
}

export default LandingPage;