import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';

import Recommendation from './recommendation.component';
import { handleFetchRecommendationList } from './recommendation.handlers';

const mapStateToProps = (state) => {
    return {
        recommendationList: state.recommendation.recommendationList
    }
};

const handlers = withHandlers({
    FetchRecommendationList: ({ dispatch }) => () => handleFetchRecommendationList(dispatch),
});

const lifecycles = lifecycle({
    componentDidMount() {
        this.props.FetchRecommendationList();
    }
});

export default compose(
    connect(mapStateToProps),
    handlers,
    lifecycles
)(Recommendation);