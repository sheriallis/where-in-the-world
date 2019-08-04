import React from "react";
import CountryCard from "./CountryCard";
const axios = require("axios");
const API_URL = "https://restcountries.eu/rest/v2/all";

class CountryList extends React.Component {
  state = {
    countries: []
  };

  componentDidMount() {
    axios.get(API_URL).then(res => {
      const countries = res.data;
      this.setState({ countries });
    });
  }

  render() {
    return (
      <div className={`countries-grid countries-grid-${this.props.theme}`}>
        <div className="countries-grid__inner">
          {this.state.countries.map(country => (
            <CountryCard
              name={country.name}
              key={country.name}
              population={country.population}
              region={country.region}
              capital={country.capital}
              flag={country.flag}
              theme={this.props.theme}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default CountryList;
