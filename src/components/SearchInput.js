import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { Breakpoints } from "../styles/Breakpoints";

const StyledInput = styled.input`
  background-color: ${props => props.theme.elements};
  color: ${props => props.theme.fg};
  border: none;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  padding: 15px 40px 15px 25px;
  padding-left: 40px;
  border-radius: 8px;
  width: 100%;
  margin-bottom: 30px;

  &::placeholder {
    color: ${props => props.theme.fg};
  }
  @media (min-width: ${Breakpoints.med}) {
    width: auto;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  .search-icon {
    position: absolute;
    top: 18%;
    /* top: 33%; */
    left: 16px;
  }
`;

export default function SearchInput({ filterData }) {
  return (
    <Wrapper>
      <form onSubmit={filterData}>
        <label className="sr-only" htmlFor="search">
          Search for a country
        </label>
        <FaSearch className="search-icon" />
        <StyledInput
          type="search"
          id="search"
          name="search"
          aria-label="Search for a country"
          placeholder="Search for a country..."
        />
      </form>
    </Wrapper>
  );
}
