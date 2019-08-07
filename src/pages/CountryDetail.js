import React, { useState, useEffect } from "react";
import "../index.css";
const axios = require("axios");

export default function CountryDetail({ match }) {
  const [country, setCountryData] = useState({});
  const countryName = match.params.country;

  useEffect(() => {
    getCountryData(countryName);
  }, [countryName]);

  const getCountryData = async countryName => {
    const res = await axios.get(
      `https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`
    );
    const countryData = res.data[0];

    setCountryData(countryData);
  };

  const {
    name,
    flag,
    nativeName,
    population,
    region,
    subregion,
    capital,
    topLevelDomain,
    currencies,
    languages
  } = country;

  return (
    <div>
      <img src={flag} alt={`flag for ${name}`} />
      <h1>{name}</h1>
      <div>
        <ul>
          <li>
            <span>Native name:</span> {nativeName}
          </li>
          <li>
            <span>Population:</span> {population && population.toLocaleString()}
          </li>
          <li>
            <span>Region:</span> {region}
          </li>
          <li>
            <span>Sub region:</span> {subregion}
          </li>
          <li>
            <span>Capital:</span> {capital}
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <span>Top level domain:</span> {topLevelDomain}
          </li>
          <li>
            <span>Currencies:</span>{" "}
            {currencies && currencies.map(currency => currency.name).join(", ")}
          </li>
          <li>
            <span>Languages: </span>
            {languages && languages.map(language => language.name).join(", ")}
          </li>
        </ul>
      </div>
    </div>
  );
}
