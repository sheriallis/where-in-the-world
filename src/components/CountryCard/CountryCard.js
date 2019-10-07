import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

import {
  Card,
  CardImg,
  CardTitle,
  CardInfoList,
  CardInfoItem,
  CardInfoWrapper
} from "./CountryCard.styles";

function CountryCard({ name, population, region, capital, flag }) {
  return (
    <Link to={`/country/${name}`}>
      <Card>
        <LazyLoad height={160} offset={100} once>
          <CardImg src={flag} alt={`flag for ${name}`} />
        </LazyLoad>
        <CardInfoWrapper>
          <CardTitle>{name}</CardTitle>
          <CardInfoList>
            <CardInfoItem>
              <span>Population:</span> {population.toLocaleString()}
            </CardInfoItem>
            <CardInfoItem>
              <span>Region:</span> {region}
            </CardInfoItem>
            <CardInfoItem>
              <span>Capital:</span> {capital}
            </CardInfoItem>
          </CardInfoList>
        </CardInfoWrapper>
      </Card>
    </Link>
  );
}

export default CountryCard;
