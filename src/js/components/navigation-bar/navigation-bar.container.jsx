import { connect } from 'react-redux';
import { compose } from 'recompose';

import NavigationBar from './navigation-bar.component';

const checkIfAuthenticated = () => {
  if (window.localStorage.getItem("JWT")) { return true; }

  return false;
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: checkIfAuthenticated()
  }
};

export default compose(
  connect(mapStateToProps)
)(NavigationBar);