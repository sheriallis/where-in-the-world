import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Header from "./components/Header";
import CountriesList from "./components/CountriesList";

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
    return (
      <div className="app__wrapper">
        <Header theme={this.state.theme} toggleTheme={this.toggleTheme} />
        <CountriesList theme={this.state.theme} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
