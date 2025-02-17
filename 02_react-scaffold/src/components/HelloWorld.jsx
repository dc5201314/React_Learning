import React from "react";

class HelloWorld extends React.Component {
  render() {
    const styles = {
      color: "blue",
      fontSize: "24px",
      textAlign: "center",
      marginTop: "20px",
    };

    return <div style={styles}>Hello, World!</div>;
  }
}

export default HelloWorld;
