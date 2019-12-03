import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle, setPropTypes } from 'recompose';

import LandingPage from './landing-page.component';

const mapStateToProps = (state) => {
    return {
        userList: state.user.userList,
    }
};

export default compose(
    connect(mapStateToProps),
)(LandingPage);
  