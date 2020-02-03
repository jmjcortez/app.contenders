import { connect } from 'react-redux';
import { compose } from 'recompose';

import Register from './register.component';
import { handleRegister } from './register.handlers';

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: values => handleRegister(values, dispatch),
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.user.isLoading,
    error: state.user.error,
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(Register);