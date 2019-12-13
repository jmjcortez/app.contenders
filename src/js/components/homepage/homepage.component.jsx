import React from 'react';
import styled from 'styled-components';

import Stats from './stats';
import Recommendation from './recommendation';

export const Homepage = props => {
  return (
    <div>
      <Stats />
      <Recommendation />
    </div>
  )
};

export default Homepage;
