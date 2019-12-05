import React from 'react';
import styled from 'styled-components';

import Stats from './stats';
import Recommendation from './recommendation';

export const Homepage = props => {
  return (
    <div>
      <div>Hello world</div>
      <Stats />
      <Recommendation />
    </div>
  )
};

export default Homepage;
