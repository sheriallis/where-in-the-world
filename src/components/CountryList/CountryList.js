import React from "react";
import CountryCard from "../CountryCard/CountryCard";

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
          key={country.name}
          country={country}
          countryQuery={countryQuery}
        />
      ))
  );
}
