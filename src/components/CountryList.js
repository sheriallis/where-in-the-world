import React from "react";
import CountryCard from "../components/CountryCard";

export default function CountryList({
  countries,
  countryQuery,
  regionSelection
}) {
  return (
    countries &&
    countries
      .filter(country =>
        country.name.toLowerCase().includes(countryQuery.toLowerCase())
      )
      .filter(country =>
        country.region
          .toLowerCase()
          .includes(regionSelection.toLocaleLowerCase())
      )
      .map(country => (
        <CountryCard
          name={country.name}
          key={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
          flag={country.flag}
        />
      ))
  );
}
