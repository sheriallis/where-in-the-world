import styled from "styled-components";

export const Card = styled.div`
  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  }
  width: 280px;
  margin: 35px 15px;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.elements};
  color: ${props => props.theme.fg};
  transition: transform 0.2s ease-in;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

export const CardTitle = styled.h2`
  margin-bottom: 20px;
  font-weight: 800;
  a {
    color: ${props => props.theme.fg};
  }
`;

export const CardInfoList = styled.ul`
  list-style: none;
`;

export const CardInfoItem = styled.li`
  span {
    font-weight: 600;
  }
`;

export const CardInfoWrapper = styled.div`
  padding: 25px 25px 50px 25px;
`;
