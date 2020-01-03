import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 10px 40px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: 400;
  background-color: ${props => props.theme.elements};
  color: ${props => props.theme.fg};
  margin-right: 16px;
  margin-bottom: 16px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.hoverBg};
    color: ${props => props.theme.hoverFg};
    cursor: pointer;
  }

  .icon {
    margin-right: 8px;
  }
`;
