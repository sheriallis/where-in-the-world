import React, { useState, useEffect } from "react";
import CountryCard from "../components/CountryCard";
const axios = require("axios");

export default function CountriesHome() {
  const [countries, setCountryData] = useState([]);

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = () => {
    axios.get(`https://restcountries.eu/rest/v2/all`).then(res => {
      const countries = res.data;
      setCountryData(countries);
    });
  };

  return (
    <div className={`countries-grid`}>
      <div className="countries-grid__inner">
        {countries.map(country => (
          <CountryCard
            name={country.name}
            key={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flag={country.flag}
          />
        ))}
      </div>
    </div>
  );
}
