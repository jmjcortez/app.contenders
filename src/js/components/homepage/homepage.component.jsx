import React, { Component } from "react";

// import styles from "components/homepage/homepage.scss";

class Homepage extends Component {
    render() {
        console.log(this.props);
        return (
          <div>
            Hello world! { this.props.aklas }
          </div>
        );
      }
}

export default Homepage;