import React from "react";
import styled from "styled-components";
import { FaGlobeAmericas } from "react-icons/fa";

const StyledError = styled.div`
  text-align: center;
  margin-top: 40px;

  .icon {
    margin-top: 20px;
    height: 100px;
    width: 100px;
  }
`;

export const NotFound = ({ text }) => {
  return (
    <StyledError>
      <h3>{text || "Page not found"}</h3>
      <FaGlobeAmericas className="icon" />
    </StyledError>
  );
};
