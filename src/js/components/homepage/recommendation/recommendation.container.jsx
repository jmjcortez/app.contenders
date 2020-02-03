import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle, setPropTypes } from 'recompose';
import PropTypes from "prop-types";

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

const propTypes = {
    fetchRecommendationList: PropTypes.func,
    setNextRecommenedUser: PropTypes.func,
    recommendationList: PropTypes.array,
};

export default compose(
    connect(mapStateToProps),
    setPropTypes(propTypes),
    handlers,
    lifecycles
)(Recommendation);