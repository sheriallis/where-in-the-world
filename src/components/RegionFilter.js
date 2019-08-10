import React from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";
import { Breakpoints } from "../styles/Breakpoints";

const StyledRegionFilter = styled.select`
  background-color: ${props => props.theme.elements};
  color: ${props => props.theme.fg};
  padding: 15px 40px 15px 25px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 8px;
  appearance: button;
  width: 100%;
  @media (min-width: 817px) {
    width: auto;
  }
`;

const Wrapper = styled.div`
  position: relative;

  .icon {
    position: absolute;
    right: 16px;
    top: 33%;
    @media (min-width: ${Breakpoints.med}) {
      top: 16px;
    }
  }
`;

export default function FilterRegion() {
  const region = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <Wrapper>
      <label className="sr-only" htmlFor="region-filter">
        Filter by region:
      </label>

      <FaChevronDown className="icon" />
      <StyledRegionFilter>
        <option value="">Filter by Region</option>
        {region.map(region => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </StyledRegionFilter>
    </Wrapper>
  );
}
