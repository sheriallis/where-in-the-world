import styled, { keyframes } from "styled-components";
import { Breakpoints } from "../../styles/Breakpoints";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1
  }
`;

export const CountryFlag = styled.img`
  width: 100%;
  max-width: 600px;
  object-fit: cover;
  margin-bottom: 40px;
  animation: ${fadeIn} 0.2s ease-in;

  @media (min-width: ${Breakpoints.large}) {
    margin-bottom: 0px;
  }
`;

export const CountryTitle = styled.h2`
  font-weight: 800;
  margin-bottom: 24px;
  @media (min-width: ${Breakpoints.large}) {
    grid-column: 1 / 3;
  }
`;

export const CountryInfo = styled.div`
  @media (min-width: ${Breakpoints.large}) {
    display: grid;
    grid-column-gap: 20px;
    margin-left: 60px;
  }
`;

export const CountryInfoList = styled.ul`
  list-style: none;
  margin-bottom: 40px;

  span {
    font-weight: 600;
  }
  @media (min-width: ${Breakpoints.large}) {
    margin-right: 90px;
  }
`;

export const BorderCountries = styled.div`
  h3 {
    margin-bottom: 30px;
    font-size: 15px;
  }

  a {
    margin-right: 16px;
  }
  @media (min-width: ${Breakpoints.large}) {
    grid-row: 3 / 4;
    grid-column: 1 / 3;
  }
`;

export const StyledCountryData = styled.div`
  margin-top: 40px;
  animation: ${fadeIn} 0.4s ease-in;

  @media (min-width: ${Breakpoints.large}) {
    margin-top: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
