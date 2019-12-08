import React from 'react';

const RecommendedUser = (props) => {

    const { currentRecommendedUser } = props;

    return (
        <div>
            RecommendedUser
            <div>Name: { currentRecommendedUser.first_name } </div>
            <div>Bio: { currentRecommendedUser.bio_text } </div>
        </div>
    )
};

export default RecommendedUser;