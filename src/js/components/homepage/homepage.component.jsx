import React from 'react';
import styled from 'styled-components';

import { defaultTheme } from '../../constants/theme';
import Stats from './stats';

export const Homepage = props => {
  return (
    <div>
      <div>Hello world</div>
      <Stats />
    </div>
  )
};

export default Homepage;
