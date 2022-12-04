import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MovieImg = styled.img`
  width: 300px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 15px;
  &:hover {
    color: grey;
  }
  &.active {
    color: grey;
  }
`;

export const BackLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  font-size: 15px;
  margin-bottom: 3px;
  display: flex;
  align-items: center;
  gap: 3px;
  &:hover {
    color: grey;
  }
`;
