import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styled, { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../../constants/theme';
import Hero from './hero';

class LandingPage extends Component {
    render() {
        return (
          <div>
            <Hero/>
          </div>
        );
      }
}

export default LandingPage;