import { connect } from 'react-redux';
import { compose } from 'recompose';

import RecommendedUser from './recommended-user.component';

const mapStateToProps = (state) => {
    return {
        currentRecommendedUser: state.recommendation.currentRecommendation
    }
};

export default compose(
    connect(mapStateToProps)
)(RecommendedUser);
