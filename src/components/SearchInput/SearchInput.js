import React from "react";
import { FaSearch } from "react-icons/fa";

import { StyledInput, Wrapper } from "./SearchInput.styles";

export default function SearchInput({ filterCountries, handleSubmit }) {
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
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
          onChange={e => filterCountries(e.currentTarget.value)}
        />
      </form>
    </Wrapper>
  );
}
