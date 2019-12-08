import React from 'react';

import RecommendedUser from './recommended-user';

export const Recommendation = props => {

    const { setNextRecommenedUser } = props;

    return (
        <div>
            <div>Recommendation</div>
            <RecommendedUser />
            <button onClick={setNextRecommenedUser}>Next</button>
        </div>
  )
};

export default Recommendation;
