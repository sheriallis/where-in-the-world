import React from "react";

import { StyledButton } from "./Button.styles";

export default function Button({ icon, text, onClick }) {
  return (
    <StyledButton onClick={onClick}>
      {icon} {text}
    </StyledButton>
  );
}
