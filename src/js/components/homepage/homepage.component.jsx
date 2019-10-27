import React, { Component } from "react";

// import styles from "components/homepage/homepage.scss";

class Homepage extends Component {
    render() {
        return (
          <div>
            Hello world! { this.props.aklas }
          </div>
        );
      }
}

export default Homepage;