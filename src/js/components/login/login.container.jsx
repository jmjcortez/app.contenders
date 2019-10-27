import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";

import Login from "./login.component";
import { userAuthenticateAction } from "../../actions/user-actions";

const mapStateToProps = (state) => {
    return {
        aklas: 'bading ka',
    }
};

// const handlers = withHandlers({
//     authenticateUser: ({ dispatch }) => () => dispatch(userAuthenticateAction()),
// });

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    onSubmit: values => dispatch(userAuthenticateAction(values)),
  }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // handlers
)(Login);

