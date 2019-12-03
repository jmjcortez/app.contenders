import { connect } from 'react-redux';
import { compose } from 'recompose';

import Register from './register.component';
import { handleRegister } from './register.handlers';

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: values => handleRegister(values, dispatch),
  }
}

export default compose(
  connect(null, mapDispatchToProps),
)(Register);