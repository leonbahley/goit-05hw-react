import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 15px;
  &:hover {
    color: grey;
  }
  &:visited {
    color: grey;
  }
`;
