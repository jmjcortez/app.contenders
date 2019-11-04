import { connect } from "react-redux";
import { compose, withHandlers, lifecycle, setPropTypes } from "recompose";

import Homepage from "./homepage.component";
import { fetchUsersAction } from "../../actions/user-actions";


const mapStateToProps = (state) => {
    return {
        userList: state.user.userList,
    }
};

// const handlers = withHandlers({
//     fetchUsers: ({ dispatch }) => () => dispatch(fetchUsersAction()),
// });
  
// const lifecycles = lifecycle({
//     componentDidMount() {
//         this.props.fetchUsers();
//     }
// });

export default compose(
    connect(mapStateToProps),
    // handlers,
    // lifecycles,
    // setPropTypes(propTypes)
)(Homepage);
  