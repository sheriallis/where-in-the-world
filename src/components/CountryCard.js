import React from "react";

function CountryCard({ name, population, region, capital, flag, theme }) {
  return (
    <div className={`card country-card-${theme}`}>
      <img src={flag} className="country-card__flag" alt={`flag for ${name}`} />
      <div className="country-card__info">
        <h2 className="country-card__name">{name}</h2>
        <ul>
          <li className="country-card__stats">
            <span>Population:</span> {population}
          </li>
          <li className="country-card__stats">
            <span>Region:</span> {region}
          </li>
          <li className="country-card__stats">
            <span>Capital:</span> {capital}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CountryCard;
