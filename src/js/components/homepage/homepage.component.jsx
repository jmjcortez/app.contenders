import React from 'react';

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
