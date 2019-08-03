import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Header from "./components/Header";

class App extends React.Component {
  state = {
    theme: "light"
  };

  toggleTheme = () => {
    this.state.theme === "light"
      ? this.setState({ theme: "dark" })
      : this.setState({ theme: "light" });
  };

  render() {
    return <Header theme={this.state.theme} toggleTheme={this.toggleTheme} />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
