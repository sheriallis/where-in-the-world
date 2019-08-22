import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";
import styled from "styled-components";

const Card = styled.div`
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  }
  width: 280px;
  margin: 40px 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.elements};
  color: ${props => props.theme.fg};
  transition: transform 0.2s ease-in;
`;

const CardImg = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const CardTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 800;
  a {
    color: ${props => props.theme.fg};
  }
`;

const CardInfoList = styled.ul`
  list-style: none;
`;

const CardInfoItem = styled.li`
  span {
    font-weight: 600;
  }
`;

const CardInfoWrapper = styled.div`
  padding: 25px 25px 50px 25px;
`;

function CountryCard({ name, population, region, capital, flag }) {
  return (
    <Card>
      <LazyLoad height={160}>
        <CardImg src={flag} alt={`flag for ${name}`} />
      </LazyLoad>
      <CardInfoWrapper>
        <CardTitle>
          <Link to={`/country/${name}`}>{name}</Link>
        </CardTitle>
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
  );
}

export default CountryCard;
