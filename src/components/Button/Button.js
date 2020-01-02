import React from "react";

import { StyledButton } from "./Button.styles";

export default function Button({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
