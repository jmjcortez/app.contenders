import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import styled from 'styled-components';

import RecommendedUser from './recommended-user';

const RecommendedContainer = styled.div`
    margin: 30px;    
`;

export const Recommendation = props => {

    const { setNextRecommenedUser, recommendationList } = props;

    const recommendedUsers = recommendationList.map((recommendedUser) =>
        <Card>
            <Card.Img variant="top" src="https://moneydotcomvip.files.wordpress.com/2019/03/conor-mcgregor-net-worth-career-earnings-1046270310.jpg" />
            <Card.Body>
            <Card.Title>{ recommendedUser.first_name }</Card.Title>
            <Card.Text>
                { recommendedUser.bio_text }
            </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last seen 3 mins ago</small>
            </Card.Footer>
        </Card>
    );

    return (
        <RecommendedContainer>
            <CardDeck>
                {recommendedUsers}
            </CardDeck>
        </RecommendedContainer>
  )
};

export default Recommendation;
