import styled from "styled-components";

export const CountryDetailSection = styled.section`
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.bg};
  color: ${props => props.theme.fg};
  height: calc(100vh - 93px);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  padding: 16px;

  a {
    margin-top: 60px;
  }
`;
