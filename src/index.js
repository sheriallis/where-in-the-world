import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DarkStyles, LightStyles } from "./styles/Themes";
import { GlobalStyle } from "./styles/GlobalStyle";

import Header from "./components/Header/Header";
import CountriesHome from "./pages/CountriesHome/CountriesHome";
import CountryDetail from "./pages/CountryDetail/CountryDetail";
import { NotFound } from "./pages/Error/Error";

function App() {
  const [lightTheme, setTheme] = useState(true);

  const toggleTheme = () => {
    setTheme(!lightTheme);
  };

  return (
    <Router>
      <ThemeProvider theme={lightTheme ? LightStyles : DarkStyles}>
        <React.Fragment>
          <GlobalStyle />
          <div className="app__wrapper">
            <Header toggleTheme={toggleTheme} lightTheme={lightTheme} />
            <main>
              <Switch>
                <Route exact path="/" component={CountriesHome} />
                <Route path="/country/:country" component={CountryDetail} />
                <Route component={NotFound} />
              </Switch>
            </main>
          </div>
        </React.Fragment>
      </ThemeProvider>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
