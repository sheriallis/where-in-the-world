import React from "react";
import BorderCountries from "../BorderCountries/BorderCountries";

import {
  CountryFlag,
  CountryTitle,
  CountryInfo,
  CountryInfoList,
  // BorderCountries,
  StyledCountryData
} from "./CountryData.styles";

export default function CountryData({ country }) {
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
    languages,
    borders
  } = country;

  return (
    <StyledCountryData>
      <CountryFlag src={flag} alt={`flag for ${name}`} />
      <CountryInfo>
        <CountryTitle>{name}</CountryTitle>
        <CountryInfoList>
          <li>
            <span>Native name: </span> {nativeName}
          </li>
          <li>
            <span>Population: </span>
            {population && population.toLocaleString()}
          </li>
          <li>
            <span>Region: </span> {region}
          </li>
          <li>
            <span>Sub region: </span> {subregion}
          </li>
          <li>
            <span>Capital: </span> {capital}
          </li>
        </CountryInfoList>
        <CountryInfoList>
          <li>
            <span>Top level domain: </span> {topLevelDomain}
          </li>
          <li>
            <span>Currencies: </span>
            {currencies && currencies.map(currency => currency.name).join(", ")}
          </li>
          <li>
            <span>Languages: </span>
            {languages && languages.map(language => language.name).join(", ")}
          </li>
        </CountryInfoList>
        {borders && borders.length > 0 && <BorderCountries borders={borders} />}
      </CountryInfo>
    </StyledCountryData>
  );
}
