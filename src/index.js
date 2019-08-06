import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";

import Header from "./components/Header";
import CountriesHome from "./pages/CountriesHome";
import CountryDetail from "./pages/CountryDetail";

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
      <Router>
        <div className="app__wrapper">
          <Header theme={this.state.theme} toggleTheme={this.toggleTheme} />
          <Switch>
            <Route exact path="/" component={CountriesHome} />
            <Route path="/country/:country" component={CountryDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
