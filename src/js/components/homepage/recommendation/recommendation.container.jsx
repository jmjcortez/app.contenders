import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';

import Recommendation from './recommendation.component';
import { handleFetchRecommendationList, handleSetNextRecommendedUser } from './recommendation.handlers';

const mapStateToProps = (state) => {
    return {
        recommendationList: state.recommendation.recommendationList
    }
};

const handlers = withHandlers({
    fetchRecommendationList: ({ dispatch }) => () => handleFetchRecommendationList(dispatch),
    setNextRecommenedUser: ({ dispatch }) => () => handleSetNextRecommendedUser(dispatch),
});

const lifecycles = lifecycle({
    componentDidMount() {
        this.props.fetchRecommendationList();
    }
});

export default compose(
    connect(mapStateToProps),
    handlers,
    lifecycles
)(Recommendation);