import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";

import { StyledError } from "./Error.styles";

export const NotFound = ({ text }) => {
  return (
    <StyledError>
      <h3>{text || "Page not found"}</h3>
      <FaGlobeAmericas className="icon" />
    </StyledError>
  );
};
