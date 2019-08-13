import React from "react";
import styled from "styled-components";

const StyledButton = styled.span`
  padding: 12px 40px;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  background-color: ${props => props.theme.elements};
  color: ${props => props.theme.fg};
  margin-right: 16px;
`;

export default function Button({ text }) {
  return <StyledButton>{text}</StyledButton>;
}
