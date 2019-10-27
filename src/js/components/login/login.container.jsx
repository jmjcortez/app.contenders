import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";

import Login from "./login.component";
import { handleAuthenticate } from "./handlers";

const mapStateToProps = (state) => {
    return {
        token: state.user.token,
    }
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: values => handleAuthenticate(values, dispatch),
  }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(Login);

